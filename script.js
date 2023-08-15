let idx = 0;

const img = document.getElementById('img');
const backbtn = document.getElementById('back');
const nextbtn = document.getElementById('next');
const modifiedtext = document.getElementById('mod-text');
const editabletext = document.getElementById('edit-text');

let captions = ['a group of horses standing around a fire', 'a group of people standing  around a pool',
'a man standing next to a tree by a lake', 'a person in a kayak pad in the ocean',
'a dog playing in the grass with its tongue', 'a man walking down the street',
'a woman standing in front of a car', 'a man sitting on a bench',
'a man standing on a small boat in a river', 'a red toy truck', 
'a group of dogs playing in a fountain', 'a person sitting on a dock watching the sunset',
'a group of people sitting on a bench in a park',
'a couple sitting on a bench','a dog playing with a water hose in the yard',
'a boy on a skateboard', 'Two girls playing soccer', 
'a man parading in the water', 'a cat laying in the grass',
'a woman in a bikini on a surfboard']

const max_len = captions.length

function getNextCaptions(next=true) {
    if (next) {
        if (idx >= max_len - 1) {
            return '';
        } else {
            return captions[idx + 1]
        }
    } else {
        if (idx <= 0) {
            return '';
        } else {
            return captions[idx - 1]
        }
    }
}

backbtn.addEventListener('click', function () {
    new_text = getNextCaptions(false);
    if (new_text != '') {
        captions[idx] = modifiedtext.textContent
        idx--
        img_srcname = 'image_folder/Image_' + (idx + 1).toString() + '.png'
        img.src = img_srcname
        editabletext.textContent = new_text
        modifiedtext.textContent = new_text
    }
});

nextbtn.addEventListener('click', function () {
    new_text = getNextCaptions(true);
    if (new_text != '') {
        captions[idx] = modifiedtext.textContent
        idx++
        img_srcname = 'image_folder/Image_' + (idx + 1).toString() + '.png'
        img.src = img_srcname
        editabletext.textContent = new_text
        modifiedtext.textContent = new_text
    }
});

editabletext.addEventListener('input', function() {
    modifiedtext.textContent = editabletext.textContent
})




