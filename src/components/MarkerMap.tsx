import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

interface MarkerPoint {
  id: string;
  x: number;
  y: number;
  type: "cast" | "depth" | "structure" | "bait";
  label: string;
  distance?: number;
  depth?: number;
  notes?: string;
}

interface CastLine {
  id: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  distance: number;
  angle: number;
}

const MarkerMap: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [markers, setMarkers] = useState<MarkerPoint[]>([]);
  const [castLines, setCastLines] = useState<CastLine[]>([]);
  const [selectedTool, setSelectedTool] = useState<
    "cast" | "depth" | "structure" | "bait"
  >("cast");
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPoint, setStartPoint] = useState<{ x: number; y: number } | null>(
    null,
  );
  const [newMarker, setNewMarker] = useState({
    label: "",
    distance: "",
    depth: "",
    notes: "",
  });
  const [showGrid, setShowGrid] = useState(true);

  useEffect(() => {
    drawMap();
  }, [markers, castLines, showGrid]);

  const drawMap = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Очистка canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Фон водоема
    const gradient = ctx.createRadialGradient(
      canvas.width / 2,
      canvas.height / 2,
      0,
      canvas.width / 2,
      canvas.height / 2,
      Math.max(canvas.width, canvas.height) / 2,
    );
    gradient.addColorStop(0, "#3B82F6");
    gradient.addColorStop(0.7, "#1E40AF");
    gradient.addColorStop(1, "#1E293B");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Сетка расстояний
    if (showGrid) {
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 1;

      // Концентрические круги (дистанция)
      const centerX = canvas.width / 2;
      const centerY = canvas.height - 50;
      for (let i = 1; i <= 5; i++) {
        const radius = i * 60;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();

        // Подписи дистанции
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        ctx.font = "12px Arial";
        ctx.fillText(`${i * 20}м`, centerX + radius - 10, centerY - 5);
      }

      // Лучи направлений
      for (let angle = 0; angle < 360; angle += 30) {
        const radians = (angle * Math.PI) / 180;
        const x = centerX + Math.cos(radians) * 300;
        const y = centerY + Math.sin(radians) * 300;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();
      }
    }

    // Линии заброса
    castLines.forEach((line) => {
      ctx.strokeStyle = "#F97316";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(line.startX, line.startY);
      ctx.lineTo(line.endX, line.endY);
      ctx.stroke();

      // Стрелка направления
      const angle = Math.atan2(
        line.endY - line.startY,
        line.endX - line.startX,
      );
      const arrowLength = 15;
      ctx.beginPath();
      ctx.moveTo(line.endX, line.endY);
      ctx.lineTo(
        line.endX - arrowLength * Math.cos(angle - Math.PI / 6),
        line.endY - arrowLength * Math.sin(angle - Math.PI / 6),
      );
      ctx.moveTo(line.endX, line.endY);
      ctx.lineTo(
        line.endX - arrowLength * Math.cos(angle + Math.PI / 6),
        line.endY - arrowLength * Math.sin(angle + Math.PI / 6),
      );
      ctx.stroke();

      // Дистанция
      const midX = (line.startX + line.endX) / 2;
      const midY = (line.startY + line.endY) / 2;
      ctx.fillStyle = "#F97316";
      ctx.font = "bold 14px Arial";
      ctx.fillText(`${line.distance}м`, midX + 10, midY - 5);
    });

    // Маркеры
    markers.forEach((marker) => {
      let color = "#22C55E";
      let symbol = "●";

      switch (marker.type) {
        case "cast":
          color = "#F97316";
          symbol = "🎯";
          break;
        case "depth":
          color = "#3B82F6";
          symbol = "📏";
          break;
        case "structure":
          color = "#8B5CF6";
          symbol = "🏔️";
          break;
        case "bait":
          color = "#22C55E";
          symbol = "🎣";
          break;
      }

      // Круг маркера
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(marker.x, marker.y, 8, 0, Math.PI * 2);
      ctx.fill();

      // Символ
      ctx.font = "16px Arial";
      ctx.fillText(symbol, marker.x - 8, marker.y + 6);

      // Подпись
      ctx.fillStyle = "white";
      ctx.font = "bold 12px Arial";
      ctx.fillText(marker.label, marker.x + 15, marker.y + 5);

      if (marker.depth) {
        ctx.font = "10px Arial";
        ctx.fillText(`${marker.depth}м`, marker.x + 15, marker.y + 18);
      }
    });
  };

  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (selectedTool === "cast" && !isDrawing) {
      // Начало линии заброса
      setIsDrawing(true);
      setStartPoint({ x, y });
    } else if (selectedTool === "cast" && isDrawing && startPoint) {
      // Конец линии заброса
      const distance = Math.round(
        Math.sqrt(
          Math.pow(x - startPoint.x, 2) + Math.pow(y - startPoint.y, 2),
        ) / 3,
      );
      const angle = Math.round(
        (Math.atan2(y - startPoint.y, x - startPoint.x) * 180) / Math.PI,
      );

      const newCastLine: CastLine = {
        id: Date.now().toString(),
        startX: startPoint.x,
        startY: startPoint.y,
        endX: x,
        endY: y,
        distance,
        angle: angle > 0 ? angle : 360 + angle,
      };

      setCastLines([...castLines, newCastLine]);
      setIsDrawing(false);
      setStartPoint(null);
    } else {
      // Добавление обычного маркера
      const newMarkerPoint: MarkerPoint = {
        id: Date.now().toString(),
        x,
        y,
        type: selectedTool,
        label: newMarker.label || `${selectedTool} ${markers.length + 1}`,
        distance: newMarker.distance ? parseInt(newMarker.distance) : undefined,
        depth: newMarker.depth ? parseFloat(newMarker.depth) : undefined,
        notes: newMarker.notes,
      };

      setMarkers([...markers, newMarkerPoint]);
      setNewMarker({ label: "", distance: "", depth: "", notes: "" });
    }
  };

  const clearMap = () => {
    setMarkers([]);
    setCastLines([]);
    setIsDrawing(false);
    setStartPoint(null);
  };

  const exportMap = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = `marker-map-${new Date().toISOString().split("T")[0]}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-water-dark flex items-center gap-2">
          <Icon name="Map" size={32} />
          Маркерная карта
        </h1>
        <div className="flex gap-2">
          <Button
            variant={showGrid ? "default" : "outline"}
            size="sm"
            onClick={() => setShowGrid(!showGrid)}
          >
            <Icon name="Grid3X3" size={16} />
            Сетка
          </Button>
          <Button variant="outline" size="sm" onClick={clearMap}>
            <Icon name="Trash2" size={16} />
            Очистить
          </Button>
          <Button variant="outline" size="sm" onClick={exportMap}>
            <Icon name="Download" size={16} />
            Экспорт
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Card>
            <CardContent className="p-6">
              <canvas
                ref={canvasRef}
                width={800}
                height={600}
                className="border border-gray-300 rounded-lg cursor-crosshair w-full max-w-full"
                onClick={handleCanvasClick}
                style={{ aspectRatio: "4/3" }}
              />

              {isDrawing && (
                <div className="mt-2 text-orange-600 text-sm">
                  <Icon name="MousePointer" size={16} className="inline mr-1" />
                  Кликните для завершения линии заброса
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Инструменты</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs
                value={selectedTool}
                onValueChange={(value) => setSelectedTool(value as any)}
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="cast">🎯 Заброс</TabsTrigger>
                  <TabsTrigger value="depth">📏 Глубина</TabsTrigger>
                </TabsList>
                <TabsList className="grid w-full grid-cols-2 mt-2">
                  <TabsTrigger value="structure">🏔️ Рельеф</TabsTrigger>
                  <TabsTrigger value="bait">🎣 Прикорм</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="space-y-3">
                <div>
                  <Label htmlFor="label">Название</Label>
                  <Input
                    id="label"
                    value={newMarker.label}
                    onChange={(e) =>
                      setNewMarker({ ...newMarker, label: e.target.value })
                    }
                    placeholder="Название точки"
                  />
                </div>

                {selectedTool === "depth" && (
                  <div>
                    <Label htmlFor="depth">Глубина (м)</Label>
                    <Input
                      id="depth"
                      type="number"
                      step="0.1"
                      value={newMarker.depth}
                      onChange={(e) =>
                        setNewMarker({ ...newMarker, depth: e.target.value })
                      }
                      placeholder="2.5"
                    />
                  </div>
                )}

                {selectedTool === "cast" && (
                  <div>
                    <Label htmlFor="distance">Дистанция (м)</Label>
                    <Input
                      id="distance"
                      type="number"
                      value={newMarker.distance}
                      onChange={(e) =>
                        setNewMarker({ ...newMarker, distance: e.target.value })
                      }
                      placeholder="80"
                    />
                  </div>
                )}

                <div>
                  <Label htmlFor="notes">Заметки</Label>
                  <Textarea
                    id="notes"
                    value={newMarker.notes}
                    onChange={(e) =>
                      setNewMarker({ ...newMarker, notes: e.target.value })
                    }
                    placeholder="Дополнительная информация"
                    className="h-20"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Маркеры ({markers.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {markers.map((marker) => (
                  <div
                    key={marker.id}
                    className="flex items-center justify-between p-2 bg-gray-50 rounded"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">
                          {marker.type === "cast" && "🎯"}
                          {marker.type === "depth" && "📏"}
                          {marker.type === "structure" && "🏔️"}
                          {marker.type === "bait" && "🎣"}
                        </Badge>
                        <span className="text-sm font-medium">
                          {marker.label}
                        </span>
                      </div>
                      {marker.depth && (
                        <span className="text-xs text-gray-600">
                          {marker.depth}м
                        </span>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        setMarkers(markers.filter((m) => m.id !== marker.id))
                      }
                    >
                      <Icon name="X" size={14} />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Линии заброса ({castLines.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {castLines.map((line) => (
                  <div
                    key={line.id}
                    className="flex items-center justify-between p-2 bg-orange-50 rounded"
                  >
                    <div>
                      <span className="text-sm font-medium">
                        {line.distance}м
                      </span>
                      <span className="text-xs text-gray-600 ml-2">
                        {line.angle}°
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        setCastLines(castLines.filter((l) => l.id !== line.id))
                      }
                    >
                      <Icon name="X" size={14} />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MarkerMap;
