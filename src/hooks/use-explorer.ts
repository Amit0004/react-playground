const useExplorer = () => {
  const insertNode = (
    explorer: any,
    node: { id: string; name: string; isFolder: boolean; items: any[] }
  ) => {
    const newNode = {
      id: node.id,
      isFolder: node.isFolder,
      name: node.name,
      items: node.items,
    };
    if (node.id === explorer.id) {
      explorer.items.unshift(newNode);
      return explorer;
    }
    const updatedItems = explorer.items.map((i: any) => insertNode(i, newNode));
    return { ...explorer, items: updatedItems };
  };

  const deleteNode = (explorer: any, nodeId: string) => {
    if (nodeId === explorer.id) {
      explorer = explorer.items.filter((item: any) => item.id != nodeId);
      return explorer;
    }
    return explorer.items.map((i: any) => deleteNode(i, nodeId));
  };

  return { insertNode, deleteNode };
};

export default useExplorer;
