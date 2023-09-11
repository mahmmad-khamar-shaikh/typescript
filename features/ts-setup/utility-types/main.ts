import { getContent } from './service';
const content = await getContent();

type Content = Awaited<ReturnType<typeof getContent>>;

function processContent(data: Content) {

}

