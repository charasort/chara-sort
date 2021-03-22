/** @type {CharData} */
let characterData       = [];   // Initial character data set used.

/** Intermediate sorter data. */
let sortedIndexList = [];
let recordDataList  = [];
let parentIndexList = [];
let tiedDataList    = [];

let leftIndex       = 0;
let leftInnerIndex  = 0;
let rightIndex      = 0;
let rightInnerIndex = 0;
let battleNo        = 1;
let sortedNo        = 0;
let pointer         = 0;

/** A copy of intermediate sorter data is recorded for undo() purposes. */
let sortedIndexListPrev = [];
let recordDataListPrev  = [];
let parentIndexListPrev = [];
let tiedDataListPrev    = [];

let leftIndexPrev       = 0;
let leftInnerIndexPrev  = 0;
let rightIndexPrev      = 0;
let rightInnerIndexPrev = 0;
let battleNoPrev        = 1;
let sortedNoPrev        = 0;
let pointerPrev         = 0;

/** Miscellaneous sorter data that doesn't need to be saved for undo(). */
let finalCharacters = [];
let loading         = false;
let totalBattles    = 0;
let sorterURL       = window.location.host + window.location.pathname;
let storedSaveType  = localStorage.getItem(`${sorterURL}_saveType`);

/** Initialize script. */
function init() {

  /** Define button behavior. */
  document.querySelector('.starting.start.button').addEventListener('click', start);
  document.querySelector('.starting.load.button').addEventListener('click', loadProgress);

  document.querySelector('.left.sort.image').addEventListener('click', () => pick('left'));
  document.querySelector('.right.sort.image').addEventListener('click', () => pick('right'));
  
  document.querySelector('.sorting.tie.button').addEventListener('click', () => pick('tie'));
  document.querySelector('.sorting.undo.button').addEventListener('click', undo);
  document.querySelector('.sorting.save.button').addEventListener('click', () => saveProgress('Progress'));
  
  document.querySelector('.finished.save.button').addEventListener('click', () => saveProgress('Last Result'));
  document.querySelector('.finished.getimg.button').addEventListener('click', generateImage);
  document.querySelector('.finished.list.button').addEventListener('click', generateTextList);

  document.querySelector('.clearsave').addEventListener('click', clearProgress);

  /** Define keyboard controls (up/down/left/right vimlike k/j/h/l). */
  document.addEventListener('keypress', (ev) => {
    /** If sorting is in progress. */
    if (timestamp && !timeTaken && !loading && choices.length === battleNo - 1) {
      switch(ev.key) {
        case 's': case '3':                   saveProgress('Progress'); break;
        case 'h': case 'ArrowLeft':           pick('left'); break;
        case 'l': case 'ArrowRight':          pick('right'); break;
        case 'k': case '1': case 'ArrowUp':   pick('tie'); break;
        case 'j': case '2': case 'ArrowDown': undo(); break;
        default: break;
      }
    }
    /** If sorting has ended. */
    else if (timeTaken && choices.length === battleNo - 1) {
      switch(ev.key) {
        case 'k': case '1': saveProgress('Last Result'); break;
        case 'j': case '2': generateImage(); break;
        case 's': case '3': generateTextList(); break;
        default: break;
      }
    } else { // If sorting hasn't started yet.
      switch(ev.key) {
        case '1': case 's': case 'Enter': start(); break;
        case '2': case 'l':               loadProgress(); break;
        default: break;
      }
    }
  });

  document.querySelector('.image.selector').insertAdjacentElement('beforeend', document.createElement('select'));

  /** Initialize image quantity selector for results. */
  for (let i = 0; i <= 10; i++) {
    const select = document.createElement('option');
    select.value = i;
    select.text = i;
    if (i === 3) { select.selected = 'selected'; }
    document.querySelector('.image.selector > select').insertAdjacentElement('beforeend', select);
  }

  document.querySelector('.image.selector > select').addEventListener('input', (e) => {
    const imageNum = e.target.options[e.target.selectedIndex].value;
    result(Number(imageNum));
  });}
  