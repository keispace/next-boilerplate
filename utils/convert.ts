export class Util {
  static numberWithComma(num: number): string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  static ageRange(age: [number, number]): string {
    if (age[1] > 84) {
      return `${Math.floor(age[0] / 10) * 10 + 1}~`;
    }

    return `${Math.floor(age[0] / 10) * 10 + 1}~${Math.floor(age[1] / 10) * 10 + 10}`;
  }
  static filterLen = (length: number) => {
    let txt = '';
    if (length === 1) {
      txt = 'Item Selected';
    }
    if (length > 1) {
      txt = 'Items Selected';
    }
    return length > 0 ? `(${length} ${txt})` : '';
  };

  static summaryJoin = (data: string[]) => (data.length > 0 ? data.join(', ') : '-');

  static SearchFilter = (searchKey: string, list: any) => {
    if (searchKey.length > 1) {
      return list.filter((x: any) => x[0].toLowerCase().includes(searchKey));
      // .concat(list.filter((x: any) => !x[0].toLowerCase().includes(searchKey)));
    }
    return list;
  };
  static SearchCheckboxValue = (g: any, searchKey: string) => {
    const matched = new RegExp(searchKey, 'gi');
    const origin = g[0].match(matched)?.[0];
    return origin && origin.length > 1 ? g[0].replace(matched, `<mark>${origin}</mark>`) : g[0];
  };
}
