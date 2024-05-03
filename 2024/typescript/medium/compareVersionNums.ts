function compareVersion(version1: string, version2: string): number {
  let v1Split = version1.split(".");
  let v2Split = version2.split(".");
  let length = 0;

  if (v1Split.length > v2Split.length) {
    length = v1Split.length;
  } else if (v1Split.length < v2Split.length) {
    length = v2Split.length;
  } else {
    length = v1Split.length;
  }

  let v1Nums: string[] = [];
  let v2Nums: string[] = [];

  for (let i = 0; i < length; i++) {
    let num1 = Number(v1Split[i]);
    let num2 = Number(v2Split[i]);

    if (isNaN(num1)) {
      v1Nums.push("0");
    } else {
      v1Nums.push(String(num1));
    }

    if (isNaN(num2)) {
      v2Nums.push("0");
    } else {
      v2Nums.push(String(num2));
    }
  }

  let v1 = Number(v1Nums.join(""));
  let v2 = Number(v2Nums.join(""));

  if (v1 === v2) {
    return 0;
  } else if (v1 < v2) {
    return -1;
  } else {
    return 1;
  }
}
