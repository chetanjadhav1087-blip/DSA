let s = "abcaabcdba";
function longestNonRepeatingSubString(s) {
    let n = s.length;
    let HashLen = 256;

    let hash = new Array(HashLen).fill(-1);
    // console.log(hash);

    let l = 0, r = 0, maxLen = 0;

    while (r < n) {
        if (hash[s.charCodeAt(r)] != -1) {
            l = Math.max(hash[s.charCodeAt(r)] + 1, l);
            console.log(s[l]);
        }
        let len = r - l + 1;
        console.log(s[l], "Left");
        console.log(s[r], "Right");
        console.log(len, "len");

        maxLen = Math.max(len, maxLen);
        hash[s.charCodeAt(r)] = r;
        console.log(hash[s.charCodeAt(r)], "hash");
        console.log([s.charCodeAt(r)], " charAt");
        console.log();

        r++;
    }
    return maxLen;
}
console.log(longestNonRepeatingSubString(s))