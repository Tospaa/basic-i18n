function getLocalizationFile(lang) {
  return new Promise((resolve, reject) => {
    function onLoad() {
      if (req.readyState === 4 && req.status >= 200 && req.status < 300) {
        resolve(JSON.parse(req.response));
      }
    }

    function onError(event) {
      reject(event, req);
    }

    const req = new XMLHttpRequest();
    req.addEventListener('load', onLoad);
    req.addEventListener('error', onError)
    req.open('GET', `${lang}.json`);
    req.send();
  });
}

function findValueGivenPath(ob, path) {
  const splitPath = path.split('.');
  if (splitPath.length === 1) {
    return ob[path];
  }

  return findValueGivenPath(ob[splitPath[0]], splitPath.slice(1).join('.'));
}

function main(localFile) {
  const allElementsToBeTranslated = document.querySelectorAll('[data-i18n]');

  for (let elem of allElementsToBeTranslated) {
    elem.innerText = findValueGivenPath(localFile, elem.dataset.i18n);
  }
}

function applyTranslation(lang) {
  getLocalizationFile(lang).then(main);
}

applyTranslation('en');
