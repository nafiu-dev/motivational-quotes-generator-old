

// Elements
const card = document.getElementById('card');
const inner = card.querySelector('.card');
// Active class
let cls = null;
// animation duration
const dur = 200;

// ~~~~~~~~~~~~~~~~~~~~~~
// 	GRADIENT 
// ~~~~~~~~~~~~~~~~~~~~~~

const shimmer = (dur, reverse) => {
	let start = null;
	const step = timestamp => {
		if (!start) start = timestamp;
		// progress of animation
		let progress = (timestamp - start) / dur;
		// playback direction
		let dir = reverse ? 1 - progress : progress;
		inner.style.setProperty('--col', `rgba(255,255,255,${dir / 4})`);
		// next step
		if (progress < 1) window.requestAnimationFrame(step)
	}
	window.requestAnimationFrame(step);
};

// ~~~~~~~~~~~~~~~~~~~~~~
// 	START
// ~~~~~~~~~~~~~~~~~~~~~~

const start = ev => {
	// bounding box
	let bb = card.getBoundingClientRect();
	// touch events
	if (ev.type === 'touchstart') ev = ev.touches[0];
	// mouse offset
	let mx = ev.clientX - bb.x;
	let my = ev.clientY - bb.y; 
	// get section
	let x = ['left', 'center', 'right'][Math.floor((mx / bb.width) * 3)],
		 y = ['top', 'center', 'bottom'][Math.floor((my / bb.height) * 3)];
	// direction (transform-origin)
	let dir = `${x} ${y}`;
	inner.style.setProperty('--dir', dir);
	// position (shimmer)
	let pos = dir.replace(/(center)/, '');
	inner.style.setProperty('--pos', pos);
	// class (shadow)
	cls = `${y}-${x}`;
	card.classList.add(cls);
	// animate shimmer
	shimmer(dur, false);
};

// ~~~~~~~~~~~~~~~~~~~~~~
// 	STOP
// ~~~~~~~~~~~~~~~~~~~~~~

const stop = ev => {
	if (cls) {
		// remove shadow class
		card.classList.remove(cls);
		// remove shimmer
		shimmer(dur, true);
		// reset class
		cls = null;
	}
};

// ~~~~~~~~~~~~~~~~~~~~~~
// 	EVENTS
// ~~~~~~~~~~~~~~~~~~~~~~

card.addEventListener('mousedown', start);
card.addEventListener('touchstart', start);
document.addEventListener('mouseup', stop);
document.addEventListener('touchend', stop);

/*--------------------------------*/



var quotes = [
    {
        name: '- Paulo Coelho -',
        quotes: 'Nothing in the world is ever completely wrong. Even a stopped clock is right twice a day'
    },
    {
        name: ' - Roy T. Bennett - ',
        quotes: 'More smiling, less worrying. More compassion, less judgment. More blessed, less stressed. More love, less hate.'
    },
    {
        name: '- Viktor E -',
        quotes: 'When we are no longer able to change a situation, we are challenged to change ourselves.'
    },
    {
        name: '-  Zig Ziglar -',
        quotes: 'Of course motivation is not permanent. But then, neither is bathing; but it is something you should do on a regular basis.'
    },
    {
        name: '- Walt Disney -',
        quotes: 'The way to get started is to quit talking and begin doing.'
    },
    {
        name: '- Roy T -',
        quotes: 'Do not let the memories of your past limit the potential of your future. There are no limits to what you can achieve on your journey through life, except in your mind'
    },
    {
        name: '- Jordan Belfort -',
        quotes: 'The only thing standing between you and your goal is the bullshit story you keep telling yourself as to why you cant achieve it.'
    },
    {
        name: '- Roy T -',
        quotes: 'Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.'
    },
    {
        name: '- Roy T -',
        quotes: 'Do not fear failure but rather fear not trying'
    },
    {
        name: '- Roy T -',
        quotes: 'Start each day with a positive thought and a grateful heart'
    },
    {
        name: '- Roy T -',
        quotes: 'Be brave to stand for what you believe in even if you stand alone.'
    },
    {
        name: '- Karen E -',
        quotes: 'When someone tells me "no," it doesnt mean I cant do it, it simply means I cant do it with them.'
    },
    {
        name: '-  Lou Holtz -',
        quotes: 'When all is said and done, more is said than done.'
    },
    {
        name: '- Donald Trump -',
        quotes: 'et going. Move forward. Aim High. Plan a takeoff'
    },
    {
        name: '- Roy T -',
        quotes: 'To have what you have never had, you have to do what you have never done'
    },
    {
        name: '- Steve Maraboli -',
        quotes: 'Live your truth. Express your love. Share your enthusiasm. Take action towards your dreams.'
    },
    {
        name: '- Lou Holtz -',
        quotes: 'Youre never as good as everyone tells you when you win, and youre never as bad as they say when you lose.'
    },
    {
        name: '- Norman Vincent Peale -',
        quotes: 'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.'
    },
    {
        name: '- Walt Disney -',
        quotes: 'If you can dream it, you can do it.'
    },
    {
        name: '- Pauline Kael -',
        quotes: 'Where there is a will, there is a way. If there is a chance in a million that you can do something, anything, to keep what you want from ending, do it. Pry the door open or, if need be, wedge your foot in that door and keep it open.'
    },
    {
        name: '- George Herbert -',
        quotes: 'Do not wait; the time will never be ‘just right.’ Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along'
    },
    {
        name: '- George Whitefield -',
        quotes: 'Press forward. Do not stop, do not linger in your journey, but strive for the mark set before you.'
    },
    {
        name: '- Eleanor Roosevelt -',
        quotes: 'The future belongs to those who believe in the beauty of their dreams.'
    },
    {
        name: '- W. Clement Stone -',
        quotes: 'Aim for the moon. If you miss, you may hit a star'
    },
    {
        name: '- Sam Levenson -',
        quotes: 'Don’t watch the clock; do what it does. Keep going.'
    },
    {
        name: '- Michael Phelps -',
        quotes: 'There will be obstacles. There will be doubters. There will be mistakes. But with hard work, there are no limits.'
    },
    {
        name: '- Theodore Roosevelt -',
        quotes: 'Keep your eyes on the stars, and your feet on the ground'
    },
    {
        name: '- Ralph Waldo Emerson -',
        quotes: 'We aim above the mark to hit the mark'
    },
    {
        name: '- Michael Korda -',
        quotes: 'One way to keep momentum going is to have constantly greater goals.'
    },
    {
        name: '- Simone de Beauvoir -',
        quotes: 'Change your life today. Don’t gamble on the future, act now, without delay.'
    },
    {
        name: '- Babe Ruth -',
        quotes: 'You just can’t beat the person who never gives up'
    },
    {
        name: '- Arthur Ashe -',
        quotes: 'Start where you are. Use what you have. Do what you can'
    },
    {
        name: '- Kevin Ngo -',
        quotes: 'Why should you continue going after your dreams? Because seeing the look on the faces of the people who said you couldn’t… will be priceless.'
    },
    {
        name: '- Harriet Beecher Stow -',
        quotes: 'Never give up, for that is just the place and time that the tide will turn'
    },
    {
        name: '- Elon Musk -',
        quotes: 'If something is important enough, even if the odds are against you, you should still do it.'
    },
    {
        name: '- Gary Vaynerchuck -',
        quotes: 'Please think about your legacy, because you’re writing it every day'
    },
    {
        name: '- Sean Rad -',
        quotes: 'Data beats emotions'
    },
    {
        name: '- Peter Shankman -',
        quotes: 'You can’t make anything viral, but you can make something good'
    },

    
];

var quotebtn = document.querySelector('#quotebtn');
var auther = document.querySelector('#Auther');
var qote = document.getElementById('quote');

function displayqoute(){
    var number = Math.floor(Math.random()*quotes.length);
    auther.innerHTML = quotes[number].name;
    qote.innerHTML = quotes[number].quotes;
};
