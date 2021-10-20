import { Props } from './BoundsFunction';


export class BoundsClass {
	getSize() {
		throw new Error('Method not implemented.');
	}
	min(_box: any, min: any) {
		throw new Error('Method not implemented.');
	}

	private props: Props;

	constructor(props: Props) {

		this.props = props;

	}
}
