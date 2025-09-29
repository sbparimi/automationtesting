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

  return (
    <div className="relative">
      <div className="absolute top-2 right-2 z-10 flex gap-2">
        <Button
          size="sm"
          variant="secondary"
          onClick={handleZoomIn}
          className="h-8 w-8 p-0"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={handleZoomOut}
          className="h-8 w-8 p-0"
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={handleReset}
          className="h-8 w-8 p-0"
        >
          <Maximize2 className="h-4 w-4" />
        </Button>
      </div>
      
      <div
        ref={containerRef}
        className="w-full h-[500px] border rounded-lg bg-background"
      >
        <Tree
          data={data}
          translate={translate}
          zoom={zoom}
          orientation="vertical"
          pathFunc="step"
          nodeSize={{ x: 250, y: 120 }}
          separation={{ siblings: 1.5, nonSiblings: 2 }}
          renderCustomNodeElement={(rd3tProps) => (
            <g>
              <circle
                r={30}
                fill="hsl(var(--primary))"
                opacity={0.2}
                stroke="hsl(var(--primary))"
                strokeWidth={2}
              />
              <text
                fill="hsl(var(--foreground))"
                strokeWidth="0"
                x="0"
                y="0"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}
              >
                {rd3tProps.nodeDatum.name.length > 20
                  ? `${rd3tProps.nodeDatum.name.substring(0, 20)}...`
                  : rd3tProps.nodeDatum.name}
              </text>
              {rd3tProps.nodeDatum.attributes?.description && (
                <text
                  fill="hsl(var(--muted-foreground))"
                  x="0"
                  y="45"
                  textAnchor="middle"
                  style={{
                    fontSize: '11px',
                  }}
                >
                  {rd3tProps.nodeDatum.attributes.description}
                </text>
              )}
            </g>
          )}
        />
      </div>
    </div>
  );
};
