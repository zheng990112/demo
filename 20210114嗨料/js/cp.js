$(".list_circle.font p span").each(function () {
  let text = $(this).text().trim();
  let txt1 = text.substring(0, 2);
  let txt2 = text.substring(2);
  $(this).empty().append(txt1 + '</br>' + txt2);
})