function eventModel(elementId) {
    if (elementId === undefined) {
        throw 'Provided DOM element is non-existant!';
    }

    let isString = typeof elementId === 'string' || elementId instanceof String;
    if (!(elementId instanceof HTMLCollection) && !(isString)) {
        throw 'Argument is not valid!';
    }

    let selectedElement = document.getElementById(elementId);
    let elementsWithClassButton = selectedElement.getElementsByClassName('button');
    let elementsWithClassContent = selectedElement.getElementsByClassName('content');

    for (const element of elementsWithClassButton) {
        element.innerText = 'hide';
        element.addEventListener('click', buttonClick, false);
    }

    function buttonClick(ev) {
        ev = ev || window.event;
        let target = ev.target || ev.srcElement;
        let text = target.textContent || target.innerText;
        let isTargetPassed = false;

        for (const element of elementsWithClassContent) {
            if (element.previousElementSibling === target) {
                isTargetPassed = true;
            }
            if (isTargetPassed && element.nextElementSibling != null) {
                if (element.nextElementSibling.className === 'button' && text === 'hide') {
                    element.style.display = 'none';
                    target.innerText = 'show';
                    break;
                } else if (element.nextElementSibling.className === 'button' && text === 'show') {
                    element.style.display = 'inline-block';
                    target.innerText = 'hide';
                    break;
                }
            }
        }
    }
}

let elementId = 'main';

eventModel(elementId);