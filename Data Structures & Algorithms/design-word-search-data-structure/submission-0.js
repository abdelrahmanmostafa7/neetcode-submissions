
class WordDictionary {
  constructor() {
    this.root = {
      children: {},
      isEnd: false,
    };
  }

  addWord(word) {
    let current = this.root;

    for (const char of word) {
      if (!current.children[char]) {
        current.children[char] = {
          children: {},
          isEnd: false,
        };
      }

      current = current.children[char];
    }

    current.isEnd = true;
  }

  search(word) {
    const dfs = (node, index) => {
      if (index === word.length) {
        return node.isEnd;
      }

      const char = word[index];

      if (char === ".") {
        for (const child of Object.values(node.children)) {
          if (dfs(child, index + 1)) {
            return true;
          }
        }

        return false;
      }

      const nextNode = node.children[char];

      if (!nextNode) {
        return false;
      }

      return dfs(nextNode, index + 1);
    };

    return dfs(this.root, 0);
  }
}

