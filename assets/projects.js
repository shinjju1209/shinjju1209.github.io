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

   * 필요 없는 줄은 "" (빈 값)으로 두면 해당 줄이 자동으로 숨겨집니다.
   * 항목 사이에는 쉼표(,)를 꼭 넣어 주세요.
   ============================================================ */

const PROJECTS = [
  {
    tag: "Robotics",
    title: "2026 Humanoid Challenge — Manipulation Team",
    status: "Ongoing",
    body: "Grasp modelling for humanoid robot manipulation tasks. I develop perception and planning pipelines for robust object grasping in unstructured environments, aiming to close the sim-to-real gap so behaviours trained in simulation transfer to hardware.",
    role: "Manipulation Team Member",
    team: "SNU SHAPE · SNU Humanoid Club",
    teamUrl: "https://www.snu-shape.com/",
    period: "2026.07.01 – 2026.07.05",
    focus: "Grasp modelling · motion planning · Inverse Kinematics",
    tech: ["Python", "Gazebo", "ROS2", "MoveIt"],
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
  },
  */
];

/* ------------------------------------------------------------
   아래는 렌더링 로직입니다. 편집할 필요 없습니다.
   ------------------------------------------------------------ */
(function renderProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  const esc = (s) =>
    String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  // "Role" 같은 메타 한 줄. value가 비어 있으면 통째로 숨김.
  const metaRow = (label, value) =>
    value ? `<li><span class="pm-label">${esc(label)}</span><span class="pm-value">${value}</span></li>` : "";

  grid.innerHTML = PROJECTS.map((p) => {
    const status = p.status
      ? `<span class="project-status">${esc(p.status)}</span>`
      : "";
    const tag = p.tag ? `<span class="card-tag">${esc(p.tag)}</span>` : "";

    const teamValue = p.teamUrl
      ? `<a href="${esc(p.teamUrl)}" target="_blank" rel="noopener">${esc(p.team)}</a>`
      : esc(p.team);

    const meta =
      metaRow("Role", esc(p.role)) +
      metaRow("Team", teamValue) +
      metaRow("Period", esc(p.period)) +
      metaRow("Focus", esc(p.focus));

    const tech =
      p.tech && p.tech.length
        ? `<div class="project-tech">${p.tech
            .map((t) => `<span class="tech-chip">${esc(t)}</span>`)
            .join("")}</div>`
        : "";

    return `
      <div class="card project-card">
        ${status}
        ${tag}
        <h3 class="card-title">${esc(p.title)}</h3>
        <p class="card-body">${esc(p.body)}</p>
        ${meta ? `<ul class="project-meta">${meta}</ul>` : ""}
        ${tech}
      </div>`;
  }).join("");
})();
