// 根据名称获取值
function get(name) {
  let obj = formatte();
  let value = decodeURIComponent(obj[encodeURIComponent(name)]);
  if (value) {
    return value;
  } else {
    return;
  }
}

// 设置cookie
function set(name, value, {maxAge, secure, path, domain} = {}) {
  let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  if (typeof maxAge == 'number') {
    cookieText += `; max-age=${maxAge}`;
  }
  if (domai) {
    cookieText += `; domain=${domain}`;
  }
  if (path) {
    cookieText += `; path=${path}`;
  }
  if (secure) {
    cookieText += `; secure=${secure}`;
  }
  document.cookie = cookieText;
}

//删除cookie
function remove(name, {domain, path} = {}) {
  set(name, '', {
    domain,
    path,
    maxAge: 0,
  });
}

//处理原cookie字符串
function formatte() {
  let cookies = document.cookie;
  let cookieObj = {};
  cookies.split('; ').forEach(item => {
    let [name, value] = item.split('=');
    cookieObj[name] = value;
  });
  return cookieObj;
}

export {
  get,
  set,
  remove,
  formatte,
};
