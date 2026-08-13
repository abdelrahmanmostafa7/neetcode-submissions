class Solution {
    encode(strs) {
        let encoded = "";

        for (const str of strs) {
            encoded += str.length + "#" + str;
        }

        return encoded;
    }

    decode(encoded) {
        const result = [];
        let pointer = 0;

        while (pointer < encoded.length) {
            const separatorIndex = encoded.indexOf("#", pointer);

            const length = Number(
                encoded.slice(pointer, separatorIndex)
            );

            pointer = separatorIndex + 1;

            const str = encoded.slice(pointer, pointer + length);

            result.push(str);

            pointer += length;
        }

        return result;
    }
}