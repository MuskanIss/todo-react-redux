export const fetchget = (url) => {
  return fetch(url).then((res) => res.json());
};
export const fetchpost = (url, value) => {
  fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(value),
  });
};

export const fetchPatch = (url, status) => {
  fetch(url, {
    method: "PATCH",
    body: JSON.stringify({
      status: !status,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};
export const fetchPatchedit = (url, value) => {
  fetch(url, {
    method: "PATCH",
    body: JSON.stringify({
      task: value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

export const fetchdelete = (url, id) => {
  fetch(url, {
    method: "DELETE",
  });
};
