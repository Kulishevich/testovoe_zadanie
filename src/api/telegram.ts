const baseUrl =
  "https://api.telegram.org/bot7920242598:AAFV3r5auvRzeX-w4AqyeWHp9RjS-M6-I5c/";

export const sendMessage = async (message: string): Promise<void> => {
  const url: string = `${baseUrl}sendMessage?chat_id=-4730579447&text=${message}`;
  const res = await fetch(url);

  if (!res.ok) {
    const error = await res.json();
    await Promise.reject(error.description || "Что-то пошло не так...");
  }
};
