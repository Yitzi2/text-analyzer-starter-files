function uniqueSort (arr) {
  let temp=arr.slice(0).sort();
  let current=temp[0];
  for (i=1; i<temp.length; ++i) {
    if (temp[i]===current) temp[i]=null;
    else current=temp[i];
  }
  return temp.filter(word=>word!==null);
}

$(".js-text-analysis-form").submit (function () {
  console.log("a");
  $(".js-unhide-on-submit").removeClass("hidden");
  let words=$(this).text().toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean);
  console.log(words);
  $(".js-word-count").text(words.length);
  $(".js-unique-words").text(uniqueSort(words).length);
  return false;
  }
)
