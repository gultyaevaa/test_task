const popperPosition = {
    mounted: (element) => {
        const reference = element.offsetParent;
        const referenceOffsetLeft = reference.offsetLeft;
        const dropdownWidth = element.offsetWidth;
        if (referenceOffsetLeft > dropdownWidth) {
            element.style.left = `-${dropdownWidth}px`
        }
        const dropdownHeight = element.clientHeight;
        const referenceOffsetBottom = reference.offsetTop;
        const referenceParent = reference.offsetParent;
        if (referenceParent.clientHeight < referenceOffsetBottom + dropdownHeight + reference.clientHeight) {
            element.style.top = `-${dropdownHeight + 10}px`;
        }
        element.style.transformOrigin = parseInt(element.style.top) < 0 ? 'bottom' : 'top';
    },
}

export default popperPosition;