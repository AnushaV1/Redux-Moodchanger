// setup store
const store =   Redux.createStore(moodReducer);

const face = document.getElementById('face');

document.getElementById('happy').addEventListener('click', () => {
    store.dispatch({ type: 'HAPPY', payload: 'ʘ‿ʘ' });
  });
  document.getElementById('sad').addEventListener('click', () => {
    store.dispatch({ type: 'SAD', payload: 'ಠ╭╮ಠ' });
  });
  document.getElementById('angry').addEventListener('click', () => {
    store.dispatch({ type: 'ANGRY', payload: 'ლಠ益ಠ)ლ' });
  });
  document.getElementById('confused').addEventListener('click', () => {
    store.dispatch({ type: 'CONFUSED', payload: '◔_◔' });
  });

  function renderFace() {
    face.innerHTML = store.getState().face;
  }

  renderFace()
store.subscribe(renderFace)