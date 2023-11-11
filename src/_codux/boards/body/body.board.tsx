import { createBoard } from '@wixc3/react-board';
import { Body } from '../../../components/body/body';

export default createBoard({
    name: 'Body',
    Board: () => <Body />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
    },
});
