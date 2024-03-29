const popperPosition = {
    mounted: (element) => {
        const reference = element.parentElement;
        const referenceOffsetLeft = reference.offsetLeft;
        const dropdownWidth = element.offsetWidth - reference.offsetWidth;
        if (referenceOffsetLeft > dropdownWidth) {
            element.style.left = `-${dropdownWidth}px`
        }
        const dropdownHeight = element.clientHeight;
        const referenceOffsetTop = reference.offsetTop;
        const referenceParent = reference.parentElement;
        if (referenceParent.clientHeight < referenceOffsetTop + dropdownHeight + reference.clientHeight) {
            if(dropdownHeight < referenceParent.clientHeight) {
                element.style.top = `-${dropdownHeight + 10}px`;
            } else {
                element.style.height = `${referenceParent.clientHeight - reference.clientHeight - 5}px`;
            }
        }
        element.style.transformOrigin = parseInt(element.style.top) < 0 ? 'bottom' : 'top';
    },
}

export default popperPosition;