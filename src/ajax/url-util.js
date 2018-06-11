const prefix = "/"

export const URL = {
  'example': {
    url: '/example',
    matcher: /\/example$/
  }
}

export function getUrl(name, ...args) {
  let url = URL[name] && URL[name].url;
  if (!url) {
    return '';
  }
  if (args && args.length > 0) {
    for (let i = 0; i < args.length; i++) {
      let regex = new RegExp('<' + i + '>');
      url = url.replace(regex, args[i]);
    }
  }
  return url;
}

export function getMatcher(name) {
  let matcher = URL[name] && URL[name].matcher;
  if (!matcher) {
    return '';
  } else {
    return matcher;
  }
}
