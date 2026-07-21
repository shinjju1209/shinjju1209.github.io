/* ============================================================
   PROJECTS DATA  —  여기만 편집하면 됩니다.
   ------------------------------------------------------------
   프로젝트를 추가하려면 아래 목록에 { ... } 블록을 하나 복사해서
   내용만 바꾸세요. HTML/CSS는 건드릴 필요 없습니다.

   각 항목 필드 설명:
     tag     : 카드 왼쪽 위 분류 태그        (예: "Robotics")
     title   : 프로젝트 제목                  (필수)
     status  : 오른쪽 위 상태 배지            (예: "Ongoing" / "Completed" / "" 는 숨김)
     body    : 프로젝트 설명 문단             (필수)
     role    : 내 역할                        (예: "Manipulation Team Member")
     team    : 소속/팀 이름                   (예: "SNU SHAPE · SNU Humanoid Club")
     teamUrl : 팀 링크 (선택, 없으면 "" 또는 생략)
     period  : 기간                           (예: "2026 – Present")
     focus   : 핵심 키워드                    (예: "Grasp modelling · perception")
     tech    : 사용 기술 목록 (배열)          (예: ["Python", "ROS2"])

   ── 사진 필드 ──
     image   : 대표 사진 1장 (카드 썸네일 + 상세 페이지 상단)
                                             예: "assets/humanoid.jpg"
     images  : 상세 페이지 갤러리 사진들 (배열)
                                             ① 사진만:        "assets/a.jpg"
                                             ② 사진+제목:     { src: "assets/a.jpg", caption: "테스트 장면" }
                                             ③ 사진+제목+설명: { src: "assets/a.jpg",
                                                                caption: "테스트 장면",
                                                                desc: "물속 장애물 회피 실험 중 촬영" }
                                             ※ 한 배열 안에서 세 형태를 섞어 써도 됩니다.
     video   : 상세 페이지 동영상 (1개)
                                             ① 유튜브/비메오 링크:
                                                "https://youtu.be/영상ID"
                                             ② 직접 올린 파일:
                                                "assets/demo.mp4"

   ── 상세 페이지(카드 클릭 시 이동) 전용 필드 ──
     details : 본문 문단 목록 (배열)          각 문자열이 한 문단이 됩니다.
                                             예: ["첫 문단 내용...", "둘째 문단 내용..."]
     links   : 관련 링크 목록 (배열)          [{ label: "GitHub", url: "https://..." }, ...]

   * 사진은 이 사이트의 assets 폴더에 넣고, 경로를 "assets/파일명.jpg" 로 적으세요.
   * 필요 없는 줄은 "" (빈 값) 또는 [] (빈 배열)로 두면 자동으로 숨겨집니다.
   * 항목 사이에는 쉼표(,)를 꼭 넣어 주세요.
   * details 를 비워 두면 상세 페이지는 위의 body 문장을 대신 보여 줍니다.
   ============================================================ */

const PROJECTS = [
  {
    tag: "Robotics",
    title: "2026 Humanoid Challenge — Manipulation Team",
    status: "Done",
    body: "Grasp modelling and Motion planning for humanoid robot manipulation tasks.",
    role: "Manipulation Team Member",
    team: "SNU SHAPE · SNU Humanoid Club",
    teamUrl: "https://www.snu-shape.com/",
    period: "2026.07.01 – 2026.07.05",
    focus: "Grasp modelling · motion planning · Inverse Kinematics",
    tech: ["Python", "Gazebo", "ROS2", "MoveIt"],
    image: "assets/photos/humanoid-challenge/together2.png",   // 대표 이미지
    images: [
      // caption/desc 는 임시값입니다 — 자유롭게 수정하세요.
      { src: "assets/photos/humanoid-challenge/gpd.png",       caption: "Grasp pose detection",            desc: "불규칙적으로 쌓여 있는 물체를 집는 Task를 수행하기 위해 Gpd 라는 CNN기반 grasp pose를 반환하는 모델을 사용하였다. Point cloud를 input으로 받아 가장 적절한 grasp pose를 반환한다. " },
      { src: "assets/photos/humanoid-challenge/pcd.png",       caption: "GPD - Point cloud data result",    desc: "Wrist cam으로 실제 물체를 찍은 뒤 pcd data로 변환한 후 TF 과정을 거친 결과를 GPD에 input으로 넣은 결과 랜덤한 물체 배치에서도 robust하게 grasp pose를 반환하는 것을 확인하였다. " },
      { src: "assets/photos/humanoid-challenge/rviz.png",      caption: "RViz visualization",              desc: "IK 기반 솔버가 내장되어있는 pymoveit을 사용하였고 rviz로 이를 확인하였다. " },
      { src: "assets/photos/humanoid-challenge/bbox.png",      caption: "Object detection (bounding box)", desc: "Perception 팀에서 YOLO로 학습시킨 너트 분류 결과이다. 어떤 너트를 집을 지 정해지면 그 너트에 해당하는 좌표로 이동해 grasp를 수행한다." },
      { src: "assets/photos/humanoid-challenge/broken.png",     caption: "Robot down...",     desc: "대회장에 가서 준비할 수 있는 3일 중 첫번째 날에 로봇이 망가졌다. 하드웨어 오류가 뜨면서 bringup이 안되는 상황. 그로 인해 리허설도 못하고 아무런 개발도 할 수 없었다. 본사에 전화해 영상통화를 하며 분석한 결과 Navigation을 담당하는 앞바퀴가 여러번 회전하여 생긴 Multi-turn 에러였다. 허무할 정도로 간단한 에러였다. 이번 경험 덕분에 다양한 에러에 유연하게 대처할 수 있도록 많은 하드웨어 경험이 필요하다고 느꼈다." },
      { src: "assets/photos/humanoid-challenge/ttzone.png",     caption: "Working at table tennis club in midnight",     desc: "앞서 생긴 로봇 고장으로 인해 시간을 날렸기 때문에 주변 무인탁구장을 밤부터 다음날 아침까지 대관하여 거기서 밤샘 개발을 진행했다. 이를 이틀동안 했다.." },
      { src: "assets/photos/humanoid-challenge/task.png",      caption: "Task scene",  desc: "미션 C 수행 중 로봇이 뜻대로 안움직여 좌절한 팀원들의 모습이다." },
      { src: "assets/photos/humanoid-challenge/task2.png",     caption: "Task scene",     desc: "미션 D 수행 전 로봇의 초기위치를 조정하고 있는 나와 준서형의 모습이다." },
      { src: "assets/photos/humanoid-challenge/task3.png",     caption: "Task scene",     desc: "" },
      { src: "assets/photos/humanoid-challenge/together1.png", caption: "Team",           desc: "별다른 사고 없이 대회를 잘 끝마친 우리 팀의 사진이다. 비록 입상은 하지 못했지만 많은 점을 배울 수 있었던 뜻깊은 시간이었다." },
    ],
    video: "",   // 예: "https://youtu.be/영상ID"  또는  "assets/humanoid.mp4"
    details: [
      // 상세 페이지 본문. 각 문자열이 한 문단입니다. 자유롭게 채워 보세요.
      "2026 Humanoid Challenge는 12개의 대학팀이 참가하여 4개의 정해진 미션을 수행하는 대회이다. 산업현장에서의 휴머노이드 사용 가능성 실증이라는 목표 하에 너트 집어서 분류하기, 휠 체결하고 드릴로 고정하기, 박스 나르기 등의 미션을 수행하였다.",
      "각 미션은 다음과 같다.",
      "미션 A: 화면에 너트 종류와 수량이 뜨면 이에 맞게 너트를 집어서 옆에 있는 박스로 옮긴다.",
      "미션 B: 박스를 집어서 일정 거리만큼 이동 후 정해진 위치에 박스를 놓는다.",
      "미션 C: 화면에 너트 삽입 순서가 표시되면 이에 맞게 파이프에 순서대로 너트를 삽입한다.",
      "미션 D: 휠을 파이프에 체결하고 이후 너트와 드릴을 파지해 휠을 고정한다.",
      "우리 팀은 미션 수행을 위해 Manipulation, Navigation, Perception, System 팀으로 역할을 나누었고 나는 Maniplation team 에서 개발을 진행하였다. 초기 대회 규정에는 미션 A에서 여러 너트 부품들이 불규칙적으로 Stacking 되어있을 것이라고 주어졌기 때문에 Robust한 Grasp를 수행하기 위해 CNN 기반 grasp candidate 생성 모델인 GPD를 우리 로봇에 적용하는 작업을 맡았다. wrist cam으로 들어온 pcd 데이터를 input으로 받고 grasp를 수행하기 적합한 End effector 좌표와 orientation을 반환한다. 실제 여러 너트가 stacking 되어있는 pcd data를 input으로 넣었을 때 실제 Grasp 가능성이 높은 여러 candidate를 반환하고 그 좌표까지 Gripper가 이동하는 것을 확인하였으나 갑자기 대회 규정이 너트들이 Stacking 되어있는 것에서 평면 배치로 바뀌면서 GPD를 쓸 이유가 사라졌다.",
      "그 뒤로는 여러가지 IK 알고리즘을 moveit 상에서 시뮬레이션으로 검증하며 빠르고  안전하게 motion planning을 하는지 검증하는 역할을 맡았다. 초기에는 manipulation을 수행할 때 IK 기반으로 진행할 지 강화학습 기반으로 진행할 지 고민하였으나 보상함수 설정의 어려움, 장애물 회피 기능, 구현 난이도 등을 이유로 IK 기반 moveit을 사용하기로 결정했다. 특히 책상과 여러 부품 등을 장애물로 등록하고 장애물과 부딪히지 않게 planning 하는 기능이 이미 있었기 때문에 이를 적극 활용하였다. ",
      "하지만 각 팀에서 기능 구현은 완성된 상태에서 마지막에 시스템 통합을 한 번에 진행하려 하다보니 여러가지 에러가 터졌고 대회 막바지까지 해당 문제를 완전히 해결하지 못했다. 또한 대회장에서 처음보는 하드웨어 에러나 통신 간섭 문제 등이 수시로 발생하였고 이로 인해 리허설과 마지막 기능 완성에 시간을 쓰지 못했다. 그로 인해 밤에도 개발을 이어가고자 무인 탁구장을 대관하여 밤샘 작업을 이틀동안 하는 기행(?)을 벌이기도 했다. ",
      "비록 입상은 못하였지만 학부생 신분으로 쉽게 접근하기 어려운 휴머노이드 로봇을 제어해볼 수 있어서 의미있는 시간이었고 도커, 깃, ROS2 등 다양한 것들을 공부하는 계기가 되었다. 대회장에서 처음 터진 에러들로 당황했던 경험 덕분에 뛰어난 로봇공학자면 소프트웨어 뿐만 아니라 하드웨어도 잘 이해하고 있어야한다는 생각이 들었다. 앞으로 최대한 많이 경험을 쌓으면서 다양한 에러에 대해 유연하게 대처할 수 있는 데이터를 쌓아야겠다. 그리고 같은 대회장에서 RoboCup 2026 이 열렸는데 국제 참가팀들의 다양한 로봇들을 보며 영감도 얻고 서로 비슷한 관심사에 대해 이야기를 나누며 많은 동기부여가 됐다. 내년에 열리는 2027 Robocup에서는 우승을 목표로 참가할 예정이다. SHAPE 화이팅!"
    ],
    links: [
      // { label: "GitHub", url: "https://github.com/..." },
    ],
  },
  {
    tag: "Robotics",
    title: "KAIST X SNU Roboticus Hackathon",
    status: "Ongoing",
    body: "Learning low-level torque control, Quasi-Direct-Drive actuator and bridging Sim2real gap.",
    role: "Motion planning",
    team: "Phase-Up",
    teamUrl: "",
    period: "2026.08.03 - 2026.08.08",
    focus: "",
    tech: [],
    image: "",
    images: [
      "",
      { src: "", caption: "", desc: "" },
    ],
    video: "",
    details: [
      "",
      "",
    ],
    links: [
      { label: "GitHub", url: "" },
    ],
  },
  {
    tag: "Autonomy",
    title: "2026 KABOAT — Algorithm Team",
    status: "Ongoing",
    body: "Autonomous navigation algorithms for an unmanned surface vehicle (USV) competing in the Korea Autonomous Boat Competition. I focus on path planning and obstacle avoidance so the vessel can reach its waypoints safely in dynamic marine environments.",
    role: "Algorithm Team Member",
    team: "2026 KABOAT — Korea Autonomous Boat Competition",
    teamUrl: "",
    period: "2026 – Present",
    focus: "Path planning · obstacle avoidance · USV autonomy",
    tech: ["Python", "C++", "ROS2"],
    image: "",   // 예: "assets/kaboat.jpg"  (카드 썸네일 + 상세 상단)
    images: [],  // 예: ["assets/kaboat-1.jpg", "assets/kaboat-2.jpg"]
    video: "",   // 예: "https://youtu.be/영상ID"  또는  "assets/kaboat.mp4"
    details: [
      // 상세 페이지 본문. 각 문자열이 한 문단입니다. 자유롭게 채워 보세요.
    ],
    links: [
      // { label: "GitHub", url: "https://github.com/..." },
    ],
  },

  /* ── 새 프로젝트는 아래에 추가하세요 (위 블록을 복사) ──
  {
    tag: "",
    title: "",
    status: "",
    body: "",
    role: "",
    team: "",
    teamUrl: "",
    period: "",
    focus: "",
    tech: [],
    image: "assets/사진파일.jpg",
    images: [
      "assets/사진1.jpg",
      { src: "assets/사진2.jpg", caption: "사진 제목", desc: "사진에 대한 상세 설명" },
    ],
    video: "https://youtu.be/영상ID",
    details: [
      "상세 페이지 첫 문단.",
      "상세 페이지 둘째 문단.",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/..." },
    ],
  },
  */
];

/* ------------------------------------------------------------
   아래는 공용 헬퍼 & 렌더링 로직입니다. 편집할 필요 없습니다.
   (index.html 의 카드 목록과 project.html 의 상세 페이지가 함께 사용)
   ------------------------------------------------------------ */

// HTML 특수문자 이스케이프
function escHtml(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// 제목 → URL 슬러그 (예: "2026 KABOAT — Algorithm Team" → "2026-kaboat-algorithm-team")
function slugify(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// 각 프로젝트에 안정적인 id 부여 (직접 id 를 지정하지 않았다면 제목에서 생성)
PROJECTS.forEach((p, i) => {
  p.id = p.id || slugify(p.title) || String(i);
});

// id 로 프로젝트 찾기 (상세 페이지에서 사용)
function findProject(id) {
  return PROJECTS.find((p) => p.id === id) || null;
}

// video 값 → 재생 가능한 HTML (유튜브/비메오 임베드 또는 <video> 파일 재생)
function videoEmbed(url) {
  if (!url) return "";
  const u = String(url).trim();

  // 직접 올린 동영상 파일
  if (/\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i.test(u)) {
    return `<div class="detail-video"><video src="${escHtml(u)}" controls playsinline preload="metadata"></video></div>`;
  }

  // YouTube (youtu.be/ID, watch?v=ID, /embed/ID, /shorts/ID)
  const yt = u.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{6,})/);
  if (yt) {
    return `<div class="detail-video"><iframe src="https://www.youtube.com/embed/${escHtml(yt[1])}" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
  }

  // Vimeo (vimeo.com/12345678)
  const vm = u.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vm) {
    return `<div class="detail-video"><iframe src="https://player.vimeo.com/video/${escHtml(vm[1])}" title="Vimeo video" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`;
  }

  // 알 수 없는 형식이면 링크로 대체
  return `<p class="detail-para"><a href="${escHtml(u)}" target="_blank" rel="noopener">동영상 보기 →</a></p>`;
}

// index.html: 카드 그리드 렌더링 (클릭 시 상세 페이지로 이동)
(function renderProjectCards() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  const metaRow = (label, value) =>
    value ? `<li><span class="pm-label">${escHtml(label)}</span><span class="pm-value">${value}</span></li>` : "";

  grid.innerHTML = PROJECTS.map((p) => {
    const status = p.status ? `<span class="project-status">${escHtml(p.status)}</span>` : "";
    const tag = p.tag ? `<span class="card-tag">${escHtml(p.tag)}</span>` : "";

    const teamValue = escHtml(p.team); // 카드에서는 클릭이 카드 전체 링크이므로 팀은 텍스트로

    const meta =
      metaRow("Role", escHtml(p.role)) +
      metaRow("Team", teamValue) +
      metaRow("Period", escHtml(p.period)) +
      metaRow("Focus", escHtml(p.focus));

    const tech =
      p.tech && p.tech.length
        ? `<div class="project-tech">${p.tech.map((t) => `<span class="tech-chip">${escHtml(t)}</span>`).join("")}</div>`
        : "";

    const media = p.image
      ? `<img class="card-media" src="${escHtml(p.image)}" alt="${escHtml(p.title)}" loading="lazy" />`
      : "";

    return `
      <a class="card project-card card-link" href="project.html?id=${encodeURIComponent(p.id)}">
        ${status}
        ${media}
        ${tag}
        <h3 class="card-title">${escHtml(p.title)}</h3>
        <p class="card-body">${escHtml(p.body)}</p>
        ${meta ? `<ul class="project-meta">${meta}</ul>` : ""}
        ${tech}
        <span class="card-more">View details →</span>
      </a>`;
  }).join("");
})();

// project.html: 상세 페이지 렌더링 (URL 의 ?id= 로 해당 프로젝트를 찾음)
(function renderProjectDetail() {
  const root = document.getElementById("project-detail");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const p = findProject(params.get("id"));

  if (!p) {
    root.innerHTML = `
      <div class="detail-notfound">
        <h1>프로젝트를 찾을 수 없습니다</h1>
        <p>요청하신 프로젝트가 존재하지 않거나 주소가 잘못되었습니다.</p>
        <a class="btn-primary" href="index.html#projects">← 프로젝트 목록으로</a>
      </div>`;
    return;
  }

  // 브라우저 탭 제목도 프로젝트명으로
  document.title = p.title + " · Shin Jiwoo";

  const status = p.status ? `<span class="detail-status">${escHtml(p.status)}</span>` : "";
  const tag = p.tag ? `<span class="card-tag">${escHtml(p.tag)}</span>` : "";

  const factRow = (label, value) =>
    value ? `<div><p class="fact-label">${escHtml(label)}</p><p class="fact-value">${value}</p></div>` : "";

  const teamValue = p.teamUrl
    ? `<a href="${escHtml(p.teamUrl)}" target="_blank" rel="noopener">${escHtml(p.team)}</a>`
    : escHtml(p.team);

  const facts =
    factRow("Role", escHtml(p.role)) +
    factRow("Team", teamValue) +
    factRow("Period", escHtml(p.period)) +
    factRow("Focus", escHtml(p.focus));

  // 본문: details 가 있으면 문단들, 없으면 body 한 문단으로 대체
  const paras =
    p.details && p.details.length
      ? p.details.map((d) => `<p class="detail-para">${escHtml(d)}</p>`).join("")
      : `<p class="detail-para">${escHtml(p.body)}</p>`;

  const tech =
    p.tech && p.tech.length
      ? `<p class="detail-block-label">Tech Stack</p>
         <div class="project-tech">${p.tech.map((t) => `<span class="tech-chip">${escHtml(t)}</span>`).join("")}</div>`
      : "";

  const links =
    p.links && p.links.length
      ? `<p class="detail-block-label">Links</p>
         <div class="detail-links">${p.links
           .map((l) => `<a class="btn-primary" href="${escHtml(l.url)}" target="_blank" rel="noopener">${escHtml(l.label)}</a>`)
           .join("")}</div>`
      : "";

  // 상단 대표 사진
  const media = p.image
    ? `<img class="detail-media" src="${escHtml(p.image)}" alt="${escHtml(p.title)}" />`
    : "";

  // 동영상 (유튜브/비메오 임베드 또는 파일 재생)
  const video = p.video
    ? `<p class="detail-block-label">Video</p>${videoEmbed(p.video)}`
    : "";

  // 갤러리: 아래 세 가지 형태를 모두 허용
  //   1) "assets/a.jpg"                                        (사진만)
  //   2) { src, caption }                                      (사진 + 제목 한 줄)
  //   3) { src, caption, desc }                                (사진 + 제목 + 상세 설명)
  const galleryItems =
    p.images && p.images.length
      ? p.images
          .map((img) => {
            const src = typeof img === "string" ? img : img.src;
            const caption = typeof img === "string" ? "" : img.caption || "";
            const desc = typeof img === "string" ? "" : img.desc || "";
            return { src, caption, desc };
          })
          .filter((it) => it.src)
      : [];

  const gallery = galleryItems.length
    ? `<p class="detail-block-label">Gallery</p>
       <div class="detail-gallery">${galleryItems
         .map((it, i) => {
           const cap =
             it.caption || it.desc
               ? `<figcaption>
                   ${it.caption ? `<span class="gcap-title">${escHtml(it.caption)}</span>` : ""}
                   ${it.desc ? `<span class="gcap-desc">${escHtml(it.desc)}</span>` : ""}
                 </figcaption>`
               : "";
           return `<figure class="gallery-item" data-gindex="${i}" tabindex="0" role="button" aria-label="${escHtml(it.caption || p.title)} — 확대 보기">
             <img src="${escHtml(it.src)}" alt="${escHtml(it.caption || p.title)}" loading="lazy" />
             ${cap}
           </figure>`;
         })
         .join("")}</div>`
    : "";

  root.innerHTML = `
    <header class="detail-hero">
      <div class="detail-inner">
        <a class="detail-back" href="index.html#projects">← All projects</a>
        <div class="detail-tagline">${tag}${status}</div>
        <h1 class="detail-h1">${escHtml(p.title)}</h1>
      </div>
    </header>
    <section class="detail-body">
      <div class="detail-body-inner">
        ${media}
        <p class="detail-lead">${escHtml(p.body)}</p>
        ${facts ? `<div class="detail-facts">${facts}</div>` : ""}
        ${p.details && p.details.length ? paras : ""}
        ${video}
        ${gallery}
        ${tech}
        ${links}
      </div>
    </section>`;

  // 갤러리 이미지 클릭 시 확대(라이트박스)로 보여 주기
  setupLightbox(galleryItems, p.title);
})();

// 라이트박스: 갤러리 사진을 클릭하면 큰 화면으로 확대하고
//            제목 · 상세 설명 · 순번을 함께 보여 준다. (Esc / ← → 지원)
function setupLightbox(items, projectTitle) {
  if (!items || !items.length) return;

  const gallery = document.querySelector(".detail-gallery");
  if (!gallery) return;

  // 라이트박스 DOM 생성 (한 번만)
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.setAttribute("aria-hidden", "true");
  lb.innerHTML = `
    <div class="lb-backdrop"></div>
    <button class="lb-close" type="button" aria-label="닫기">&times;</button>
    <button class="lb-nav lb-prev" type="button" aria-label="이전 사진">&#8249;</button>
    <button class="lb-nav lb-next" type="button" aria-label="다음 사진">&#8250;</button>
    <figure class="lb-figure" role="dialog" aria-modal="true" aria-label="확대된 사진">
      <img class="lb-img" src="" alt="" />
      <figcaption class="lb-caption">
        <span class="lb-title"></span>
        <span class="lb-desc"></span>
        <span class="lb-count"></span>
      </figcaption>
    </figure>`;
  document.body.appendChild(lb);

  const imgEl = lb.querySelector(".lb-img");
  const titleEl = lb.querySelector(".lb-title");
  const descEl = lb.querySelector(".lb-desc");
  const countEl = lb.querySelector(".lb-count");
  const prevBtn = lb.querySelector(".lb-prev");
  const nextBtn = lb.querySelector(".lb-next");

  let current = 0;
  let lastFocused = null;

  function render() {
    const it = items[current];
    imgEl.src = it.src;
    imgEl.alt = it.caption || projectTitle;

    titleEl.textContent = it.caption || "";
    titleEl.style.display = it.caption ? "" : "none";
    descEl.textContent = it.desc || "";
    descEl.style.display = it.desc ? "" : "none";
    countEl.textContent = `${current + 1} / ${items.length}`;

    const multiple = items.length > 1;
    prevBtn.style.display = multiple ? "" : "none";
    nextBtn.style.display = multiple ? "" : "none";
  }

  function open(index) {
    current = index;
    lastFocused = document.activeElement;
    render();
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.body.classList.add("lb-lock");
    lb.querySelector(".lb-close").focus();
  }

  function close() {
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lb-lock");
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  function step(delta) {
    current = (current + delta + items.length) % items.length;
    render();
  }

  // 썸네일 클릭 / 키보드(Enter·Space)로 열기
  gallery.querySelectorAll(".gallery-item").forEach((fig) => {
    const idx = Number(fig.getAttribute("data-gindex"));
    fig.addEventListener("click", () => open(idx));
    fig.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open(idx);
      }
    });
  });

  lb.querySelector(".lb-close").addEventListener("click", close);
  lb.querySelector(".lb-backdrop").addEventListener("click", close);
  prevBtn.addEventListener("click", () => step(-1));
  nextBtn.addEventListener("click", () => step(1));

  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "ArrowRight") step(1);
  });
}
