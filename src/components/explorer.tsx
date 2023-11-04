import { useState } from "react";
import useExplorer from "../hooks/use-explorer";

const Explorer = ({ explorerData }: any) => {
  const [fileData, setFileData] = useState(
    JSON.parse(JSON.stringify(explorerData))
  );
  const { insertNode, deleteNode } = useExplorer();
  const [expand, setExpand] = useState(false);
  const { isFolder, id, name, items } = fileData;
  const [displayInput, setDisplayInput] = useState<{
    visible: boolean;
    isFolder: boolean | null;
    nodeId: string;
  }>({
    visible: false,
    isFolder: null,
    nodeId: "",
  });

  const onExpand = (e: any) => {
    e.stopPropagation();
    setExpand(!expand);
  };

  const onExplorerUpdate = (e: any, type: string, id: string) => {
    e.stopPropagation();
    setExpand(true);
    setDisplayInput({
      visible: true,
      isFolder: type === "folder",
      nodeId: id,
    });
  };

  const onDelete = (e: any) => {
    e.stopPropagation();
    const data = deleteNode(explorerData, displayInput.nodeId);
    setFileData(data);
    console.log("Delete request >> ", explorerData);
  };

  const onAdd = (e: any) => {
    e.stopPropagation();
    if (e.keyCode === 13) {
      const data = insertNode(explorerData, {
        id: displayInput.nodeId,
        isFolder: displayInput.isFolder ?? false,
        name: e?.target?.value,
        items: [],
      });
      setFileData(data);
      setDisplayInput({ visible: false, isFolder: null, nodeId: "" });
    }
  };
  return (
    <>
      <span
        className={isFolder ? "folder" : "file"}
        data-testid="explorer"
        style={{
          paddingLeft: "10px",
        }}
        key={id}
        onClick={(e) => onExpand(e)}
      >
        <span style={{ display: "flex", justifyContent: "space-between" }}>
          {isFolder ? "🗂️" : "📂"} {name}
          {isFolder ? (
            <span className="explorer-btn">
              <button onClick={(e) => onExplorerUpdate(e, "folder", id)}>
                🗂️ +
              </button>
              <button onClick={(e) => onExplorerUpdate(e, "file", id)}>
                📂 +
              </button>
              <button onClick={(e) => onDelete(e)}>🗑️</button>
            </span>
          ) : (
            <span className="explorer-btn">
              <button onClick={(e) => onDelete(e)}>🗑️</button>
            </span>
          )}
        </span>
        {displayInput.visible ? (
          <span
            style={{
              paddingLeft: "10px",
            }}
          >
            {displayInput.isFolder ? "🗂️" : "📂"}{" "}
            <input
              onBlur={() =>
                setDisplayInput({ visible: false, isFolder: null, nodeId: id })
              }
              autoFocus
              onKeyDown={(e) => onAdd(e)}
            />
          </span>
        ) : null}
        {expand && items.map((item: any) => <Explorer explorerData={item} />)}
      </span>
    </>
  );
};

export default Explorer;
