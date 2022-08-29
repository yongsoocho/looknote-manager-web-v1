export default function date(ISO) {
  const temp = ISO.split("T");
  const year = temp[0].split("-")[0].slice(2, 4);
  const month = temp[0].split("-")[1];
  const day = temp[0].split("-")[2];
  const hour = temp[1].split(":")[0];
  const minute = temp[1].split(":")[1];

  return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`;
}
