
export const BASEAPI = "https://www.1secmail.com/api/v1";

export const deleteTempEmail = async (email) => {
  await fetch(`https://proxyserver.badvillain01.repl.co/delete?id=${email}`);
};

export const getTempMail = async () => {
  const req = await fetch(`${BASEAPI}/?action=genRandomMailbox`);
  const data = await req.json();

  return data[0];
};

export const checkTempMailbox = async (email) => {
  const e = email.split("@");

  const req = await fetch(
    `${BASEAPI}/?action=getMessages&login=${e[0]}&domain=${e[1]}`
  );
  const body = await req.json();

  return body;
};

export const getSingleEmail = async (email, id) => {
  const e = email.split("@");

  const req = await fetch(
    `${BASEAPI}/?action=readMessage&login=${e[0]}&domain=${e[1]}&id=${id}`
  );
  const body = await req.json();

  return body;
};

export const downloadURL = (email, id, file) => {
  const e = email.split("@");

  return `${BASEAPI}/?action=download&login=${e[0]}&domain=${e[1]}&id=${id}&file=${file}`;
};
