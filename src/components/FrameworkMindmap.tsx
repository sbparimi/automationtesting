import React, { useState } from 'react';
import Tree from 'react-d3-tree';
import { Button } from './ui/button';
import { ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

interface MindmapNode {
  name: string;
  attributes?: {
    description?: string;
  };
  children?: MindmapNode[];
}

interface FrameworkMindmapProps {
  data: MindmapNode;
  title: string;
}

export const FrameworkMindmap: React.FC<FrameworkMindmapProps> = ({ data, title }) => {
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(0.8);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (containerRef.current) {
      const dimensions = containerRef.current.getBoundingClientRect();
      setTranslate({
        x: dimensions.width / 2,
        y: 100,
      });
    }
  }, []);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.2, 0.3));
  };

  const handleReset = () => {
    setZoom(0.8);
    if (containerRef.current) {
      const dimensions = containerRef.current.getBoundingClientRect();
      setTranslate({
        x: dimensions.width / 2,
        y: 100,
      });
    }
  };

  const nodeColors = [
    '#3B82F6', // Blue
    '#EF4444', // Red  
    '#10B981', // Green
    '#F59E0B', // Yellow
    '#8B5CF6', // Purple
    '#EC4899', // Pink
    '#06B6D4', // Cyan
    '#F97316', // Orange
  ];

  const getNodeColor = (depth: number, index: number) => {
    if (depth === 0) return '#1E40AF'; // Root node - darker blue
    return nodeColors[index % nodeColors.length];
  };

  return (
    <div className="relative">
      <div className="absolute bottom-4 right-4 z-10 flex gap-2 bg-background/80 backdrop-blur-sm rounded-lg p-2 border shadow-lg">
        <Button
          size="sm"
          variant="outline"
          onClick={handleZoomOut}
          className="h-8 w-8 p-0 hover:bg-accent"
        >
          <span className="text-lg font-bold">−</span>
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={handleReset}
          className="h-8 w-8 p-0 hover:bg-accent"
        >
          <Maximize2 className="h-4 w-4" />
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={handleZoomIn}
          className="h-8 w-8 p-0 hover:bg-accent"
        >
          <span className="text-lg font-bold">+</span>
        </Button>
      </div>
      
      <div
        ref={containerRef}
        className="w-full h-[600px] border rounded-lg bg-gradient-to-br from-background to-muted/20 overflow-hidden"
      >
        <Tree
          data={data}
          translate={translate}
          zoom={zoom}
          orientation="vertical"
          pathFunc="diagonal"
          nodeSize={{ x: 280, y: 120 }}
          separation={{ siblings: 1.5, nonSiblings: 2.0 }}
          renderCustomNodeElement={(rd3tProps) => {
            const depth = rd3tProps.nodeDatum.__rd3t.depth || 0;
            const index = rd3tProps.nodeDatum.__rd3t.id || 0;
            const indexNum = typeof index === 'string' ? parseInt(index) || 0 : (typeof index === 'number' ? index : 0);
            const nodeColor = getNodeColor(depth, indexNum);
            const isRoot = depth === 0;
            
            return (
              <g>
                {isRoot ? (
                  // Root node - oval shape
                  <ellipse
                    cx="0"
                    cy="0"
                    rx="100"
                    ry="30"
                    fill={nodeColor}
                    opacity={0.95}
                    stroke="#ffffff"
                    strokeWidth={3}
                  />
                ) : (
                  // Child nodes - rounded rectangles
                  <rect
                    x={-80}
                    y={-20}
                    width={160}
                    height={40}
                    fill={nodeColor}
                    rx={20}
                    ry={20}
                    opacity={0.9}
                    stroke="#ffffff"
                    strokeWidth={2}
                  />
                )}
                <text
                  fill="white"
                  strokeWidth="0"
                  x="0"
                  y="0"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{
                    fontSize: isRoot ? '18px' : '13px',
                    fontWeight: 'bold',
                    textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                  }}
                >
                  {rd3tProps.nodeDatum.name.length > (isRoot ? 20 : 18)
                    ? `${rd3tProps.nodeDatum.name.substring(0, isRoot ? 20 : 18)}...`
                    : rd3tProps.nodeDatum.name}
                </text>
                {rd3tProps.nodeDatum.attributes?.description && !isRoot && (
                  <text
                    fill="#ffffff"
                    x="0"
                    y="35"
                    textAnchor="middle"
                    style={{
                      fontSize: '10px',
                      fontWeight: '400',
                      opacity: 0.8
                    }}
                  >
                    {typeof rd3tProps.nodeDatum.attributes.description === 'string' && rd3tProps.nodeDatum.attributes.description.length > 22
                      ? `${rd3tProps.nodeDatum.attributes.description.substring(0, 22)}...`
                      : rd3tProps.nodeDatum.attributes.description}
                  </text>
                )}
              </g>
            );
          }}
        />
      </div>
    </div>
  );
};
