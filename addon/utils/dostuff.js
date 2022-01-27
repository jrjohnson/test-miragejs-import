import {
  macroCondition,
  dependencySatisfies,
  importSync,
} from '@embroider/macros';

export default function dostuff() {
  if (macroCondition(dependencySatisfies('miragejs', '*'))) {
    const { Response } = importSync('miragejs');
    console.log(Response);
  } else {
    throw new Error('You must add miragejs to your app to use this helper.');
  }
}
