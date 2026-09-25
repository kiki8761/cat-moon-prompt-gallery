/* 九条完整提示词来自用户提供的夜晚版文档。图片路径与 images 文件夹对应。 */
const cases = [
  { id: 1, cat: "芒果", title: "夜月桂宫", original: "./images/mango-01-original.jpg", generated: "./images/mango-01-generated.png", prompt: "请把芒果送进桂花飘落的夜月桂宫，月光下仍是它熟悉的模样。 根据原图的透视关系，将原有环境自然转换为夜晚的中秋月宫天宫场景。猫咪所在位置转换为云海之上的汉白玉露台或白玉石台，周围配有雕花玉栏、玉柱、深色木构宫殿飞檐与局部长廊。远处是层层延展的月宫建筑群、悬空楼阁、飞桥、云海与少量云中瀑布，整体恢弘开阔，具有强烈空间纵深。\n\n请严格保留参考图中猫咪的外貌特征、毛色、花纹、身体比例、姿势、视线方向和基本构图，不改变猫咪本身的长相与动作。\n\n天空为深蓝色夜空，一轮异常巨大的冷白色满月悬挂在远方天际，月面纹理清晰可见，月光真实柔和，不刺眼不过曝。近景加入一株古雅桂树或部分桂花枝叶作为前景点缀，桂花自然垂落，少量花瓣在夜风中轻轻飘散，不遮挡猫咪主体。画面可加入少量古风宫灯，提供温暖金色点光源，与冷白月光形成层次丰富的夜景氛围。\n\n猫咪仅增加少量精致古风宠物配饰，如玉佩项圈、小流苏或细致金饰，不使用复杂人类服装，保持真实猫咪毛发质感和自然身体结构。整体为电影级东方神话写实摄影风格，真实石材与木构纹理，月光与灯火交织，高级感，空气透视强，竖版3:4，高细节，高完成度。\n\n不要新增人物或其他动物，不要拟人化，不要改变猫咪身份，不要白天效果，不要现代建筑，不要卡通插画风，不要夸张霓虹灯，不要多个太阳，不要多个月亮，不要文字、logo、水印。" },
  { id: 2, cat: "芒果", title: "月宫长廊", original: "./images/mango-02-original.jpg", generated: "./images/mango-02-generated.png", prompt: "让芒果坐在临云的月宫长廊，远远望见深蓝夜色里的宫阙。 根据原图构图，将原有环境自然替换为夜晚的月宫长廊场景。猫咪所在位置转换为一处临云而建的汉白玉长廊或宫苑回廊边缘，脚下为细腻发亮的白玉地面，周围有雕花栏杆、木构廊柱、垂挂宫灯与少量鎏金装饰。远方是隐藏在夜色与云海之间的天宫楼阁、飞桥和台榭，层层递进，空间辽阔。\n\n请严格保留参考图中猫咪的外貌特征、毛色、花纹、身体比例、姿势、视线方向和基本构图，不改变猫咪本身的长相与动作。\n\n画面为清澈深蓝夜空，一轮巨大的冷白色满月位于远方天际，照亮云海与宫殿轮廓。近景加入桂树枝叶从画面一侧自然伸入，枝头开满金桂，花朵在月光与灯笼光下微微发亮，少量桂花花瓣飘落，增强中秋气息。局部可出现暖金色宫灯、灯笼或檐下灯火，形成静谧、温柔、贵气的夜景氛围。\n\n猫咪仅佩戴少量精致古风宠物小配饰，如玉坠项圈、细流苏或小铃铛，不穿复杂服饰，保持真实自然。整体为电影级东方神话写实摄影风格，真实石材与木构纹理，月光清冷、灯火温暖，层次分明，竖版3:4，高细节。\n\n不要新增人物或其他动物，不要拟人化，不要改变猫咪身份，不要白天蓝天，不要现代家具，不要卡通风，不要文字、logo、水印，不要多个月亮。" },
  { id: 3, cat: "芒果", title: "月饼卧榻", original: "./images/mango-03-original.jpg", generated: "./images/mango-03-generated.png", prompt: "把芒果原来的小窝变成一枚巨大的中秋月饼，让它在月宫里舒舒服服地躺着。 根据原图构图，将猫咪原本所在的位置自然转换为一枚巨大的精美中秋月饼，月饼作为猫咪的卧榻，完整保留猫咪原有姿势与画面趣味感。整体环境替换为夜晚的月宫露台，地面为发亮的白玉石台，周围配有汉白玉栏杆、深色木构宫殿、雕花门窗与局部飞檐。\n\n请严格保留参考图中猫咪的外貌特征、毛色、花纹、身体比例、姿势、视线方向和基本构图，不改变猫咪本身的长相与动作。\n\n远方是恢弘的天宫建筑群、悬空楼阁、飞桥、云海与少量云中瀑布，画面开阔，具有电影感。天空为深蓝夜空，一轮异常巨大的冷白色满月高悬天际，月面纹理清晰，月光照亮云海与宫殿。近景加入桂树枝叶与盛开的金桂，少量桂花飘散，局部加入暖金色宫灯和点点灯火，让画面在清冷月色中带有节庆温度。\n\n猫咪仅增加少量精致古风宠物配饰，如玉坠项圈、小流苏或细小金饰，不使用复杂人类服装，保持真实猫咪毛发与自然体态。整体为电影级东方神话写实摄影风格，写实中带一点中秋幻想感，华丽但不俗气，竖版3:4，高细节，高完成度。\n\n不要新增人物或其他动物，不要拟人化，不要改变猫咪身份，不要白天效果，不要卡通插画，不要现代建筑，不要过度夸张特效，不要文字、logo、水印。" },
  { id: 4, cat: "葡萄", title: "桂影玉阶", original: "./images/grape-01-original.jpg", generated: "./images/grape-01-generated.png", prompt: "让葡萄来到桂影洒落的白玉台阶，抬头看见云海上的月宫。 根据原图透视关系，将原有环境自然转换为夜晚月宫中的白玉台阶或玉石露台场景。猫咪所在位置转换为云海之上的白玉台面，周围有雕花栏杆、玉柱、深色木构宫苑与精致飞檐。远处是被月光照亮的层层天宫楼阁、飞桥、云海与少量高空瀑布，空间层次丰富，视野开阔。\n\n请严格保留参考图中猫咪的外貌特征、毛色、花纹、身体比例、姿势、视线方向和基本构图，不改变猫咪本身的长相与动作。\n\n天空为通透的深蓝色夜空，一轮巨大的冷白色满月位于远方，月光柔和地洒在白玉地面与猫咪毛发上，形成清亮的轮廓光。近景加入一枝或一树桂花作为前景装饰，桂花金黄细小，少量花瓣自然飘落。局部加入暖色宫灯、灯笼或檐下灯火，让整体气氛更静谧、更精致、更有中秋夜晚的神话感。\n\n猫咪仅增加少量精致古风宠物小配饰，如玉饰项圈、小铃铛或细流苏，不使用复杂服装，保持真实猫咪自然状态。整体为电影级东方神话写实摄影风格，真实石材和木构纹理，夜色通透，月光与灯火结合，竖版3:4，高细节。\n\n不要新增人物或其他动物，不要拟人化，不要改变猫咪身份，不要白天效果，不要现代建筑，不要卡通风，不要过度滤镜，不要文字、logo、水印。" },
  { id: 5, cat: "葡萄", title: "月门窥月", original: "./images/grape-02-original.jpg", generated: "./images/grape-02-generated.png", prompt: "让葡萄在一扇白玉月门边探头，偷偷望向远处的满月。 根据原图构图，将原有环境替换为夜晚的中秋月宫庭院。猫咪所在位置靠近一处白玉月门、宫墙转角或雕花廊柱旁，保持原图的观察感与构图趣味。月门之外是浩瀚云海、远方宫殿群、悬空飞桥与若隐若现的楼阁，整体恢弘但不喧闹。\n\n请严格保留参考图中猫咪的外貌特征、毛色、花纹、身体比例、姿势、视线方向和基本构图，不改变猫咪本身的长相与动作。\n\n天空为清澈深蓝夜空，一轮异常巨大的冷白色满月悬挂在远方，月面纹理真实可见。近景加入盛开的桂花枝从画面上方或侧方自然垂落，桂花细密金黄，少量花瓣漂浮在空气中。局部加入暖色宫灯、门边灯盏、檐下灯火，为画面增加温柔金色点光，与冷白月光形成冷暖对比，呈现安静、灵动、神秘的夜晚氛围。\n\n猫咪仅增加少量古风宠物配饰，如玉坠项圈、小流苏或小铃铛，不使用复杂人类服装，保持真实毛发质感与自然身体结构。整体采用电影级东方神话写实摄影风格，石材、木构、灯火与云海质感真实，高级感强，竖版3:4，高细节。\n\n不要新增人物或其他动物，不要拟人化，不要改变猫咪身份，不要白天，不要现代家具，不要卡通风，不要文字、logo、水印，不要多个月亮。" },
  { id: 6, cat: "葡萄", title: "月饼上望月", original: "./images/grape-03-original.jpg", generated: "./images/grape-03-generated-v2.png", prompt: "让葡萄趴在一枚巨大的月饼上，两只前爪沿着饼边自然垂下。 根据原图构图与透视，将原本环境自然转换为夜晚的月宫观景露台。把原图中的吊床与木质横沿自然转换成露台边缘一枚巨大、完整、精美的中秋月饼。葡萄自然趴卧在月饼上，两只前爪像原图一样从前缘垂下，身体姿势、朝向与镜头高度保持一致；月饼纹样和饼皮真实清晰，稳稳承托猫咪。周围是汉白玉栏杆、深色木构宫殿、雕花玉柱、金色小灯与古雅飞檐。远方为一望无际的云海天宫，分布着层层楼阁、天桥、阁台与少量云中瀑布，整体场景广阔而梦幻。\n\n请严格保留参考图中猫咪的外貌特征、毛色、花纹、身体比例、姿势、视线方向和基本构图，不改变猫咪本身的长相与动作。\n\n天空为深蓝夜空，一轮巨大明月高挂天际，月面纹理清晰，月光真实照亮云层与建筑边缘。近景加入桂花枝叶与散落的花瓣作为装饰，营造浓郁中秋氛围。可加入少量古风宫灯，灯火温暖含蓄，不喧宾夺主，使画面在清冷月色中多一层温柔烟火气。\n\n猫咪仅增加少量精致古风宠物配饰，如玉佩项圈、小流苏、小金铃，不穿复杂衣物，保持真实猫咪状态。整体为电影级东方神话写实摄影风格，月色通透，云海层次丰富，材质真实，竖版3:4，高细节，高完成度。\n\n不要新增人物或其他动物，不要拟人化，不要改变猫咪身份，不要白天效果，不要现代元素，不要卡通风格，不要文字、logo、水印。" },
  { id: 7, cat: "双猫", title: "共啃大月饼", original: "./images/cats-01-original-v2.jpg", generated: "./images/cats-01-generated-v4.png", prompt: "让芒果和葡萄从左右两侧，一起吃画面正中那枚大大大的月饼。 根据原图透视关系，将原有环境自然转换为夜晚的中秋月宫露台场景。两只猫所在位置转换为云海之上的汉白玉平台或白玉石台。严格保持俯拍视角与两只猫左右排列：芒果在左侧，葡萄在右侧。将原来两只食碗的位置合并成一枚超级巨大的完整中秋月饼，放在它们之间，月饼直径约为两只猫身体宽度之和，几乎占据画面中央、纹样清晰可见。两只猫同时低头靠近同一枚月饼，芒果从左边、葡萄从右边一起吃这一个大月饼；画面要明显呈现共享同一块月饼的动作，而不是两个餐盘、两份小点心或把月饼摆在猫身后。月饼与两只猫都是画面主体，月饼不可被猫头完全遮住。保留芒果浅银白背毛和葡萄深灰条纹背毛的真实花纹、体型与左右位置。周围可见局部雕花栏杆、玉柱、深色木构宫殿与廊桥。远方是层层延展的月宫建筑群、悬空楼阁、飞桥、云海与少量云中瀑布，画面恢弘，空间开阔。\n\n请严格保留参考图中两只猫咪各自的外貌特征、毛色、花纹、身体比例、相对位置、俯拍视角和基本构图；允许猫咪稍微转头朝向同一枚大月饼，不改变它们本身的长相与动作。\n\n天空为深蓝色夜空，一轮异常巨大的冷白色满月高悬天际，月面纹理清晰，月光柔和地照亮两只猫、白玉平台与远处宫殿。近景加入桂树枝叶或局部桂花作为前景装饰，少量桂花花瓣在空中轻轻飘散。局部可加入暖金色宫灯、灯笼或檐下灯火，形成清冷月光与温暖灯火交织的夜晚氛围。\n\n两只猫咪仅增加少量精致古风宠物小配饰，如玉坠项圈、小流苏、小铃铛，不使用复杂人类服装，保持真实自然的猫咪状态。整体为电影级东方神话写实摄影风格，真实石材与木构纹理，夜景通透，层次分明，横版4:3，高细节。\n\n不要新增人物或其他动物，不要拟人化，不要改变猫咪身份，不要白天效果，不要现代建筑，不要卡通风，不要文字、logo、水印。" },
  { id: 8, cat: "双猫", title: "云宫高低台", original: "./images/cats-02-original.jpg", generated: "./images/cats-02-generated.png", prompt: "把两只猫原来的高低位置，变成云宫里上下相连的白玉观景台。 根据原图透视关系，将原有环境自然转换为夜晚的天宫云桥或月宫观景平台场景。两只猫所在位置替换为白玉石台、玉桥边缘或月宫露台一角，周围配有雕花汉白玉栏杆、深色木构宫殿、局部玉柱与飞檐。远方是恢弘的天宫夜景：层层楼阁横跨云海，飞桥相连，少量云中瀑布从月色中垂落，场面开阔而浪漫。\n\n请严格保留参考图中两只猫咪各自的外貌特征、毛色、花纹、身体比例、相对位置、姿势、视线方向和基本构图，不改变它们本身的长相与动作。\n\n天空为深蓝夜空，一轮巨大冷白色满月位于远方，月色明净，照亮云层与建筑轮廓。近景加入桂花枝叶和少量飘散花瓣，营造中秋氛围。可加入少量暖金色宫灯或灯笼作为点光源，让整体夜景既清冷又温柔，兼具仙气与陪伴感。\n\n两只猫咪仅增加少量精致古风宠物配饰，如玉坠、流苏、小铃铛，不使用复杂人类服装，保持真实自然状态。整体为电影级东方神话写实摄影风格，真实石材与木构质感，空气透视明显，月光与灯火层次丰富，竖版3:4，高细节。\n\n不要新增人物或其他动物，不要拟人化，不要改变猫咪身份，不要白天效果，不要现代建筑，不要卡通化，不要文字、logo、水印，不要多个月亮。" },
  { id: 9, cat: "双猫", title: "桂下团圆", original: "./images/cats-03-original.jpg", generated: "./images/cats-03-generated-v2.png", prompt: "桂花树下的团圆宴上，芒果张着嘴，像在和葡萄争那块月饼。 根据原图构图，将原有环境自然替换为夜晚的月宫中秋团圆场景。两只猫所在位置转换为一处月宫玉台或白玉露台，台面周围布置少量精致中秋元素，如一枚巨大的华丽月饼或少量小月饼摆设、桂花点缀和古风宫灯，但整体仍以猫咪为主体，不要让道具喧宾夺主。远方为云海之上的月宫建筑群、飞桥、楼阁与少量云中瀑布，层层叠叠，梦幻开阔。\n\n请严格保留参考图中两只猫咪各自的外貌特征、毛色、花纹、身体比例、相对位置、姿势、视线方向、芒果微微张嘴的表情和基本构图，不改变它们本身的长相与动作。\n\n天空为深蓝夜空，一轮巨大明月高挂远方，月面清晰可见。近景加入盛开的桂树枝叶自然垂落，金桂细密，少量花瓣轻轻飘散。宫灯与灯笼散发温暖金色光晕，月光冷白柔和，与灯火形成富有节庆感又不俗气的中秋夜景。\n\n画面右侧的浅银白猫芒果保持原图微微张嘴的瞬间，嘴形清楚自然，不要闭嘴或露出夸张的牙齿。两只猫咪仅增加少量精致古风宠物配饰，如玉饰项圈、细流苏、小铃铛，不使用复杂衣物，保持真实毛发与自然体态。整体为电影级东方神话写实摄影风格，精致、华丽、温柔、具有团圆感，竖版3:4，高细节，高完成度。\n\n不要新增人物或其他动物，不要拟人化，不要改变猫咪身份，不要白天效果，不要现代物件，不要卡通风，不要文字、logo、水印。" }
];

const list = document.querySelector("#case-list");
const count = document.querySelector("#case-count");
const dialog = document.querySelector("#image-dialog");
const dialogImage = document.querySelector("#dialog-image");
const dialogTitle = document.querySelector("#dialog-title");
let copyTimer;

function imageBlock(item, type) {
  const isOriginal = type === "original";
  const label = isOriginal ? "原图" : "生成后";
  const box = document.createElement("button");
  box.type = "button";
  box.className = `image-box ${isOriginal ? "before" : "after"}`;
  box.setAttribute("aria-label", `查看${item.cat}《${item.title}》${label}大图`);
  const tag = document.createElement("span"); tag.className = "image-label"; tag.textContent = label;
  const placeholder = document.createElement("span"); placeholder.className = "image-placeholder";
  placeholder.setAttribute("aria-label", "图片加载中");
  const spinner = document.createElement("span"); spinner.className = "loading-spinner"; spinner.setAttribute("aria-hidden", "true");
  placeholder.append(spinner);
  const img = document.createElement("img"); img.alt = `${item.cat}《${item.title}》${label}`; img.loading = item.id === 1 ? "eager" : "lazy";
  img.addEventListener("load", () => box.classList.add("has-image"));
  img.addEventListener("error", () => { box.classList.add("image-error"); placeholder.setAttribute("aria-label", "图片暂时无法加载"); });
  img.src = item[type];
  box.append(tag, placeholder, img);
  box.addEventListener("click", () => { if (box.classList.contains("has-image")) openImage(item, type); });
  return box;
}

function render(filter = "all") {
  const visible = cases.filter(item => filter === "all" || item.cat === filter);
  count.textContent = String(visible.length).padStart(2, "0");
  list.replaceChildren();
  visible.forEach(item => {
    const card = document.createElement("article"); card.className = `case-card${item.id === 1 ? " featured" : ""}`;
    const heading = document.createElement("div"); heading.className = "case-heading";
    const number = document.createElement("span"); number.className = "case-number"; number.textContent = String(item.id).padStart(2, "0");
    const titleGroup = document.createElement("div");
    const cat = document.createElement("p"); cat.className = "cat-name"; cat.textContent = item.cat === "双猫" ? "芒果 × 葡萄" : item.cat;
    const title = document.createElement("h3"); title.textContent = item.title;
    titleGroup.append(cat, title); heading.append(number, titleGroup);
    if (item.id === 1) { const badge = document.createElement("span"); badge.className = "feature-badge"; badge.textContent = "FEATURED STORY"; heading.append(badge); }

    const images = document.createElement("div"); images.className = "before-after";
    const arrow = document.createElement("span"); arrow.className = "transition-arrow"; arrow.setAttribute("aria-hidden", "true"); arrow.textContent = "→";
    images.append(imageBlock(item, "original"), arrow, imageBlock(item, "generated"));

    const promptSection = document.createElement("section"); promptSection.className = "prompt-section";
    const promptTop = document.createElement("div"); promptTop.className = "prompt-top";
    const promptHeading = document.createElement("h4"); promptHeading.textContent = "这张图的完整提示词";
    const copy = document.createElement("button"); copy.type = "button"; copy.className = "copy-btn"; copy.textContent = "复制提示词";
    copy.addEventListener("click", () => copyPrompt(item.prompt, copy));
    promptTop.append(promptHeading, copy);
    const prompt = document.createElement("p"); prompt.className = "prompt-text"; prompt.id = `prompt-${item.id}`; prompt.textContent = item.prompt;
    const expand = document.createElement("button"); expand.type = "button"; expand.className = "expand-btn"; expand.textContent = "展开全部 ↓";
    expand.setAttribute("aria-expanded", "false"); expand.setAttribute("aria-controls", prompt.id);
    expand.addEventListener("click", () => { const expanded = prompt.classList.toggle("expanded"); expand.textContent = expanded ? "收起 ↑" : "展开全部 ↓"; expand.setAttribute("aria-expanded", String(expanded)); });
    promptSection.append(promptTop, prompt, expand); card.append(heading, images, promptSection); list.append(card);
  });
}

async function copyPrompt(value, button) {
  try {
    if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(value);
    else { // 双击打开的 file:// 页面在部分浏览器里无法使用 Clipboard API。
      const field = document.createElement("textarea"); field.value = value; field.style.position = "fixed"; field.style.opacity = "0";
      document.body.append(field); field.select();
      const copied = document.execCommand("copy"); field.remove();
      if (!copied) throw new Error("copy failed");
    }
    button.textContent = "已复制 ✓";
  } catch { button.textContent = "复制失败，请重试"; }
  clearTimeout(copyTimer); copyTimer = setTimeout(() => { if (button.isConnected) button.textContent = "复制提示词"; }, 2000);
}

function openImage(item, type) {
  dialogImage.src = item[type]; dialogImage.alt = `${item.cat}《${item.title}》${type === "original" ? "原图" : "生成后"}`;
  dialogTitle.textContent = `${item.cat} · ${item.title} / ${type === "original" ? "原图" : "生成后"}`;
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
}
document.querySelector("#dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".filter").forEach(other => { const active = other === button; other.classList.toggle("active", active); other.setAttribute("aria-pressed", String(active)); });
  render(button.dataset.filter);
}));
render();
