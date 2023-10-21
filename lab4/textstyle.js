var element = document.getElementById("PAR")

function ChangeFont(fontType) {
    element.style.fontFamily = fontType;

}

//text align
function ChangeAlign(align) {
    element.style.textAlign = align;
}
//line height
function ChangeHeight(lHeight) {
    element.style.lineHeight = lHeight;
}

//letter spacing
function ChangeLSpace(space) {
    element.style.letterSpacing = space;
}

//text indent
function ChangeIndent(indent) {
    element.style.textIndent = indent;
}

//text transform 
function ChangeTransform(transform) {
    element.style.textTransform = transform;
}

// texet decoration
function ChangeDecorate(decoration) {
    element.style.textDecoration=decoration
}

//border 
function ChangeBorder(border) {
    element.style.border= border
}

//border color
function ChangeBorderColor(color) {
    element.style.borderColor = color;
}
