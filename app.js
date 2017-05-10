function uniqueSort (arr) {
  let temp=arr.slice(0).sort();
  let current=temp[0];
  for (i=1; i<temp.length; ++i) {
    if (temp[i]===current) temp[i]=null;
    else current=temp[i];
  }
  return temp.filter(word=>word!==null);
}

function redefineSubmit(){
  $(".js-text-analysis-form").submit (
    function () {
      $(".js-unhide-on-submit").removeClass("hidden");
      let words=$(".js-text-analysis-input").val().toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean);
      $(".js-word-count").text(words.length);
      $(".js-unique-words").text(uniqueSort(words).length);
      let sumCounter=0;
      for (i=0; i<words.length; ++i) {
        sumCounter+=words[i].length;
      }
      $(".js-average-length").text(sumCounter/words.length);
    return false;
    }
  }
)
  
$(redefineSubmit);
