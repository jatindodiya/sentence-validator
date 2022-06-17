let sampleText = `
Hail to thee, blithe Spirit! Bird thou never wert, That from Heaven, or near it, Pourest thy full heart In profuse strains of unpremeditated art.
Higher still and higher From the earth thou springest Like a cloud of fire; The blue deep thou wingest, And singing still dost soar, and soaring ever singest.
In the golden lightning Of the sunken sun, O'er which clouds are bright'ning, Thou dost float and run; Like an unbodied joy whose race is just begun.
The pale purple even Melts around thy flight; Like a star of Heaven, In the broad day-light Thou art unseen, but yet I hear thy shrill delight,
Keen as are the arrows Of that silver sphere, Whose intense lamp narrows In the white dawn clear Until we hardly see, we feel that it is there.
All the earth and air With thy voice is loud, As, when night is bare, From one lonely cloud The moon rains out her beams, and Heaven is overflow'd.
What thou art we know not; What is most like thee? From rainbow clouds there flow not Drops so bright to see As from thy presence showers a rain of melody.
Like a Poet hidden In the light of thought, Singing hymns unbidden, Till the world is wrought To sympathy with hopes and fears it heeded not:
Like a high-born maiden In a palace-tower, Soothing her love-laden Soul in secret hour With music sweet as love, which overflows her bower:
Like a glow-worm golden In a dell of dew, Scattering unbeholden Its a{:e}real hue Among the flowers and grass, which screen it from the view:
Like a rose embower'd In its own green leaves, By warm winds deflower'd, Till the scent it gives Makes faint with too much sweet those heavy-winged thieves:
Sound of vernal showers On the twinkling grass, Rain-awaken'd flowers, All that ever was Joyous, and clear, and fresh, thy music doth surpass.
Teach us, Sprite or Bird, What sweet thoughts are thine: I have never heard Praise of love or wine That panted forth a flood of rapture so divine.
Chorus Hymeneal, Or triumphal chant, Match'd with thine would be all But an empty vaunt, A thing wherein we feel there is some hidden want.
What objects are the fountains Of thy happy strain? What fields, or waves, or mountains? What shapes of sky or plain? What love of thine own kind? what ignorance of pain?
With thy clear keen joyance Languor cannot be: Shadow of annoyance Never came near thee: Thou lovest: but ne'er knew love's sad satiety.
Waking or asleep, Thou of death must deem Things more true and deep Than we mortals dream, Or how could thy notes flow in such a crystal stream?
We look before and after, And pine for what is not: Our sincerest laughter With some pain is fraught; Our sweetest songs are those that tell of saddest thought.
Yet if we could scorn Hate, and pride, and fear; If we were things born Not to shed a tear, I know not how thy joy we ever should come near.
Better than all measures Of delightful sound, Better than all treasures That in books are found, Thy skill to poet were, thou scorner of the ground!
Teach me half the gladness That thy brain must know, Such harmonious madness From my lips would flow The world should listen then, as I am listening now.
`;

let getCharFrequency = text => {

  let f = {};
  for (let char of text.toLowerCase()) f[char] = (f.hasOwnProperty(char) ? f[char] : 0) + 1;
  
  let len = vectorDiffMag(f, {});
  for (let k in f) f[k] = f[k] / len;
  
  return f;
  
};

let vectorDiffMag = (freq1, freq2) => {
  
  let allKeys = new Set([ ...Object.keys(freq1), ...Object.keys(freq2) ]);
  let squareSum = 0;
  for (let key of allKeys) {
    let v1 = freq1.hasOwnProperty(key) ? freq1[key] : 0;
    let v2 = freq2.hasOwnProperty(key) ? freq2[key] : 0;
    let diff = v2 - v1;
    squareSum += diff * diff; 
  }
  return Math.sqrt(squareSum); 
  
};

module.exports = {

    check_message: ( message )=>{


        let mainFreqs = getCharFrequency(sampleText);

        let a = 5;     
        let b = 0.85;  
        let c = 0.55;  
        let thresh = Math.log(1 + a / message.length) * b + c;
        let diff = vectorDiffMag(mainFreqs, getCharFrequency( message ));


        if (diff < thresh) {
 
            // console.log("Valid")
            return true
        } 
        else {
        
            // console.log("invalid")
            return false

        }

    }

}