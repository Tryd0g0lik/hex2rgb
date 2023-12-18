import React, { FormEvent, ChangeEvent, ChangeEventHandler } from "react";
interface Color {
  type?: string;
  size: number;
  name?: string;
  placeholder: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

function root(str: string) {
	const root = document.querySelector(str) as HTMLDivElement;

	return root
}
function querySelector(str: string) {
	const div = document.querySelector(str) as HTMLDivElement;
	return div
}
function HeandleInputFC(event: ChangeEvent<HTMLInputElement>): void {
  const pattern = /#?(\w{2}){3}/i;
  let responce = event.target.value.match(pattern);
	function rendering(str) {
		return parseInt(str, 16)
	}

  console.log("TYPE: ", typeof responce, responce?.input)
  console.log("EVENT: ", event.target.value)
  console.log("LENGTH: ", event.target.value.length)

  if (event.target.value === responce?.input
    && responce?.input.length <= event.target.size) {
    let prop = responce?.input.split(' ').join('');
		let render = '';
    const input = document.getElementsByTagName('input')[0];

    input.className = input.className.replace('err', '');
    let i = 0;
		if (prop.includes('#')) {
			prop = prop.replace('#', '')
		};

		for (let ind = 2; ind <= prop.length; ind += 2) {
			const str = prop.slice(i, ind)
      if (i === 0) {
        render = "rgb(" + rendering(str)

			}
			else if (i === 4) {
        render += '-' + rendering(str) + ')'

			} else {
        render += '-' + rendering(str)

      }
			i = ind

    };

		i = 0;
		if (querySelector('.App > .input > .block') && render.length > 0) {
			querySelector('.App > .input > .block').innerHTML = render;
			render = render.replace('-', ', ').replace('-', ', ');
			console.log('backgroundCOLOR: ', render)
			root('#root').style.backgroundColor = render;
			render = ''
		}
  } else {
    const input = document.getElementsByTagName('input')[0]
		input.classList.add('err');
		if (root('#root').hasAttribute('style')) {
			root('#root').removeAttribute('style');
			querySelector('.App > .input > .block').innerHTML = '';
		}
  }
}

export default function InputFC({ type = "text", size, name = "text", placeholder, value = "", onChange = HeandleInputFC }: Color) {


  return (
    <input type={type}
      name={name} size={size}
      onChange={onChange} className=""
      placeholder={placeholder} />
  )
}
