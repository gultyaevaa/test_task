const popperPosition = {
    mounted: (element) => {
        const parent = element.offsetParent;
        const referenceOffsetLeft = parent.offsetLeft;
        const dropdownWidth = element.offsetWidth;
        if (referenceOffsetLeft > dropdownWidth) {
            element.style.left = `-${dropdownWidth}px`
        }
        const dropdownHeight = element.offsetHeight;
        const referenceOffsetBottom = parent.offsetTop;
        if (document.body.offsetHeight < referenceOffsetBottom + dropdownHeight) {
            element.style.top = `-${dropdownHeight + 10}px`;
        }
        element.style.transformOrigin = parseInt(element.style.top) < 0 ? 'bottom' : 'top';
    },
}

export default popperPosition;