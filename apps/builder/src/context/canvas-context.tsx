import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";

import type { CanvasPage, CanvasState, ComponentNodeData } from "../types";

interface CanvasContextValue extends CanvasState {
  // Canvas operations
  setZoom: (zoom: number) => void;
  setPan: (pan: { x: number; y: number }) => void;
  resetView: () => void;

  // Node operations
  addNode: (node: ComponentNodeData) => void;
  updateNode: (id: string, updates: Partial<ComponentNodeData>) => void;
  deleteNode: (id: string) => void;
  selectNode: (id: string, multi?: boolean) => void;
  clearSelection: () => void;

  // Page operations
  addPage: (page: Omit<CanvasPage, "id">) => void;
  updatePage: (id: string, updates: Partial<CanvasPage>) => void;
  deletePage: (id: string) => void;
  setCurrentPage: (id: string) => void;

  // Utility operations
  toggleGrid: () => void;
  setGridSize: (size: number) => void;
}

const CanvasContext = createContext<CanvasContextValue | null>(null);

type CanvasAction =
  | { type: "SET_ZOOM"; zoom: number }
  | { type: "SET_PAN"; pan: { x: number; y: number } }
  | { type: "RESET_VIEW" }
  | { type: "ADD_NODE"; node: ComponentNodeData }
  | { type: "UPDATE_NODE"; id: string; updates: Partial<ComponentNodeData> }
  | { type: "DELETE_NODE"; id: string }
  | { type: "SELECT_NODE"; id: string; multi: boolean }
  | { type: "CLEAR_SELECTION" }
  | { type: "ADD_PAGE"; page: CanvasPage }
  | { type: "UPDATE_PAGE"; id: string; updates: Partial<CanvasPage> }
  | { type: "DELETE_PAGE"; id: string }
  | { type: "SET_CURRENT_PAGE"; id: string }
  | { type: "TOGGLE_GRID" }
  | { type: "SET_GRID_SIZE"; size: number };

const initialState: CanvasState = {
  zoom: 1,
  pan: { x: 0, y: 0 },
  selectedNodes: [],
  nodes: [],
  pages: [
    {
      id: "default",
      name: "Home",
      width: 1200,
      height: 800,
      nodes: [],
    },
  ],
  currentPageId: "default",
  gridSize: 20,
  snapToGrid: true,
};

function canvasReducer(state: CanvasState, action: CanvasAction): CanvasState {
  switch (action.type) {
    case "SET_ZOOM":
      return { ...state, zoom: Math.max(0.1, Math.min(5, action.zoom)) };

    case "SET_PAN":
      return { ...state, pan: action.pan };

    case "RESET_VIEW":
      return { ...state, zoom: 1, pan: { x: 0, y: 0 } };

    case "ADD_NODE":
      return {
        ...state,
        nodes: [...state.nodes, action.node],
        pages: state.pages.map((page) =>
          page.id === action.node.pageId
            ? { ...page, nodes: [...page.nodes, action.node.id] }
            : page,
        ),
      };

    case "UPDATE_NODE":
      return {
        ...state,
        nodes: state.nodes.map((node) =>
          node.id === action.id ? { ...node, ...action.updates } : node,
        ),
      };

    case "DELETE_NODE":
      return {
        ...state,
        nodes: state.nodes.filter((node) => node.id !== action.id),
        selectedNodes: state.selectedNodes.filter((id) => id !== action.id),
        pages: state.pages.map((page) => ({
          ...page,
          nodes: page.nodes.filter((id) => id !== action.id),
        })),
      };

    case "SELECT_NODE":
      return {
        ...state,
        selectedNodes: action.multi
          ? state.selectedNodes.includes(action.id)
            ? state.selectedNodes.filter((id) => id !== action.id)
            : [...state.selectedNodes, action.id]
          : [action.id],
      };

    case "CLEAR_SELECTION":
      return { ...state, selectedNodes: [] };

    case "ADD_PAGE":
      const newPage = { ...action.page, id: crypto.randomUUID() };
      return {
        ...state,
        pages: [...state.pages, newPage],
        currentPageId: newPage.id,
      };

    case "UPDATE_PAGE":
      return {
        ...state,
        pages: state.pages.map((page) =>
          page.id === action.id ? { ...page, ...action.updates } : page,
        ),
      };

    case "DELETE_PAGE":
      const remainingPages = state.pages.filter(
        (page) => page.id !== action.id,
      );
      return {
        ...state,
        pages: remainingPages,
        currentPageId:
          state.currentPageId === action.id
            ? remainingPages[0]?.id || ""
            : state.currentPageId,
        nodes: state.nodes.filter((node) => node.pageId !== action.id),
      };

    case "SET_CURRENT_PAGE":
      return { ...state, currentPageId: action.id };

    case "TOGGLE_GRID":
      return { ...state, snapToGrid: !state.snapToGrid };

    case "SET_GRID_SIZE":
      return { ...state, gridSize: action.size };

    default:
      return state;
  }
}

interface CanvasProviderProps {
  children: React.ReactNode;
  initialState?: Partial<CanvasState>;
}

export function CanvasProvider({
  children,
  initialState: customInitialState,
}: CanvasProviderProps) {
  const [state, dispatch] = useReducer(canvasReducer, {
    ...initialState,
    ...customInitialState,
  });

  const setZoom = useCallback((zoom: number) => {
    dispatch({ type: "SET_ZOOM", zoom });
  }, []);

  const setPan = useCallback((pan: { x: number; y: number }) => {
    dispatch({ type: "SET_PAN", pan });
  }, []);

  const resetView = useCallback(() => {
    dispatch({ type: "RESET_VIEW" });
  }, []);

  const addNode = useCallback((node: ComponentNodeData) => {
    dispatch({ type: "ADD_NODE", node });
  }, []);

  const updateNode = useCallback(
    (id: string, updates: Partial<ComponentNodeData>) => {
      dispatch({ type: "UPDATE_NODE", id, updates });
    },
    [],
  );

  const deleteNode = useCallback((id: string) => {
    dispatch({ type: "DELETE_NODE", id });
  }, []);

  const selectNode = useCallback((id: string, multi = false) => {
    dispatch({ type: "SELECT_NODE", id, multi });
  }, []);

  const clearSelection = useCallback(() => {
    dispatch({ type: "CLEAR_SELECTION" });
  }, []);

  const addPage = useCallback((page: Omit<CanvasPage, "id">) => {
    dispatch({ type: "ADD_PAGE", page: { ...page, id: crypto.randomUUID() } });
  }, []);

  const updatePage = useCallback((id: string, updates: Partial<CanvasPage>) => {
    dispatch({ type: "UPDATE_PAGE", id, updates });
  }, []);

  const deletePage = useCallback((id: string) => {
    dispatch({ type: "DELETE_PAGE", id });
  }, []);

  const setCurrentPage = useCallback((id: string) => {
    dispatch({ type: "SET_CURRENT_PAGE", id });
  }, []);

  const toggleGrid = useCallback(() => {
    dispatch({ type: "TOGGLE_GRID" });
  }, []);

  const setGridSize = useCallback((size: number) => {
    dispatch({ type: "SET_GRID_SIZE", size });
  }, []);

  const value: CanvasContextValue = {
    ...state,
    setZoom,
    setPan,
    resetView,
    addNode,
    updateNode,
    deleteNode,
    selectNode,
    clearSelection,
    addPage,
    updatePage,
    deletePage,
    setCurrentPage,
    toggleGrid,
    setGridSize,
  };

  return (
    <CanvasContext.Provider value={value}>{children}</CanvasContext.Provider>
  );
}

export function useCanvas() {
  const context = useContext(CanvasContext);
  if (!context) {
    throw new Error("useCanvas must be used within a CanvasProvider");
  }
  return context;
}
