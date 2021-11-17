const form = qs('form'), 
alphabet = $('alphabet'), 
sortNewList = $('sort-more'), 
copyList = $('copy-list'),
msg = $('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    let val = e.target.elements.alphabet.value
    let btn = e.target.elements.sort
    let regex = /([^\s].+)|(^\w)|[^\s]^\W.+/gmi
    let words = [], match, sort

    while(match = regex.exec(val)){
        words.push(match[0])
        sort = words.sort()
        removeDuplicateWords(sort).forEach((item, index, arr) => {
                alphabet.value = arr.join('\n')
        })
    }

    showElements()
    messageDisplay(msg, 'List Sorted')
    btn.classList.add('remove')
})

copyList.addEventListener('click', e => {
    e.preventDefault()
    copyListFn()
    messageDisplay(msg, 'List Copied')
})

function copyListFn(){
    alphabet.select()
    document.execCommand('copy')
}

function removeDuplicateWords(arr){
    return arr.filter((item, idx) => arr.indexOf(item) === idx)
}

function showElements(){
    alphabet.classList.add('success')
    copyList.classList.add('sort-new')
    sortNewList.classList.add('sort-new')
}

function messageDisplay(elm, msg){
    elm.innerText = msg
}
