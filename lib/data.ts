export const days = [
  ["抵達米蘭","Milano","城市初見與第一杯 Espresso"],["前往多洛米蒂","Ortisei","駛入群山，入住山中小屋"],["刀鋒山線","Seceda","纜車、稜線與高山野餐"],["湖光倒影","Lago di Braies","清晨木舟與湖畔散步"],["三峰之路","Tre Cime","在群峰之間完成經典健行"],["山谷慢日","Val Gardena","留白、咖啡與小鎮光影"],
  ["水都序章","Venezia","穿過巷弄抵達大運河"],["威尼斯日常","Venezia","清晨市集與暮色 Gondola"],["文藝復興","Firenze","火車南下，老城散步"],["托斯卡尼光線","Toscana","酒莊公路與金色丘陵"],["藝術之日","Firenze","美術館、穹頂與夕陽"],["湖區北上","Lake Como","抵達湖畔，享用晚餐"],
  ["科莫慢旅","Bellagio","搭船穿梭湖岸小鎮"],["最後的義大利","Milano","設計街區與旅程中場"],["飛往愛琴海","Santorini","白色島嶼的第一抹藍"],["火山與海","Fira","懸崖步道與火山巡航"],["Oia 金色時刻","Oia","巷弄漫遊與日落餐桌"],["未完待續","Santorini","在愛琴海好好說再見"]
].map((d,i)=>({day:i+1,title:d[0],place:d[1],note:d[2],date:`2026. 06. ${String(i+6).padStart(2,"0")}`}));

export const photos=[
"https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1600&q=85",
"https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1200&q=85",
"https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1200&q=85",
"https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=1200&q=85",
"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85"];
