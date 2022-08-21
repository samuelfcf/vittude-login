const addOrRemoveLocalStorageData = (data: string) => {
  const user = localStorage.getItem('token');

  if (user) {
    localStorage.removeItem('token');
    return;
  }

  localStorage.setItem('token', JSON.stringify(data))
}

export default addOrRemoveLocalStorageData;