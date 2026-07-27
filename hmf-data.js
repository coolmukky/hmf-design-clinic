/* HMF Design Clinic — shared content (generated from the aligned Case Study sheet).
   Four Case Studies, four pain points each. Consumed by index.html + proctor.html. */
window.HMF_DATA = {
 "useCases": [
  {
   "id": "ai-security",
   "title": "AI Security",
   "tag": "AI Defense · compliance, supply chain, cloud visibility, runtime",
   "intro": "Cedarline is standing up AI across regulated workflows and public cloud faster than security can see it. Help them prove compliance, vet what they adopt, and get visibility and guardrails over AI traffic.",
   "tip": "Most answers are <b>Cisco AI Defense</b> capabilities — model &amp; app validation, supply-chain scanning, AI cloud visibility, and the AI Defense–Multicloud Defense runtime integration.",
   "concerns": [
    {
     "id": "c1",
     "text": "\"Under the EU AI Act, we are classified as a 'Provider' for our internal AI systems. We need to demonstrate robustness and cybersecurity compliance to satisfy Article 15. How does Cisco help us meet these specific requirements?\""
    },
    {
     "id": "c2",
     "text": "\"We are integrating various open-source models and third-party agents into our internal workflows. How can we ensure these assets aren't introducing vulnerabilities into our environment before they even go live?\""
    },
    {
     "id": "c3",
     "text": "\"We know AI is showing up across our cloud environments faster than security can track it. We're worried we have models, agents, datasets, and MCP-connected tools running without visibility or consistent controls.\""
    },
    {
     "id": "c4",
     "text": "\"We're running AI workloads in cloud accounts, but we don't have a reliable way to see which models and AI assets are actually in use. We're also concerned about workloads reaching out to third-party AI models without security knowing about it. And even when we do know the traffic path, we need a practical way to inspect and enforce guardrails on prompt and response traffic in the cloud without changing every application.\""
    }
   ]
  },
  {
   "id": "cloud-edge",
   "title": "Cloud Edge",
   "tag": "Multicloud Defense · unified multicloud policy",
   "intro": "Workloads sprawl across AWS, Azure and on-prem, each with its own policy model. Contain lateral movement, prove consistent controls to auditors, and give Cedarline one place to define and enforce policy.",
   "tip": "Answers center on <b>Cisco Multicloud Defense</b> (macro/micro segmentation, unified visibility &amp; policy), with <b>Secure Workload</b> + <b>Secure Firewall</b> for hybrid consistency.",
   "concerns": [
    {
     "id": "c1",
     "text": "\"If a breach occurs in one of our public cloud instances, we are terrified that the attacker will move laterally into our core on-premises systems. How can we contain these threats in a multicloud environment?\""
    },
    {
     "id": "c2",
     "text": "\"Our auditors require proof that our security controls are applied consistently across all our cloud workloads. Gathering this data from different cloud providers is a manual, time-consuming nightmare.\""
    },
    {
     "id": "c3",
     "text": "\"We have workloads spread across AWS, Azure, and on-premises data centers. Managing security policies individually in each cloud environment is creating massive operational overhead and leading to inconsistent security posture.\""
    },
    {
     "id": "c4",
     "text": "\"We have workloads on-prem, in cloud, and in mixed environments, and policy consistency is becoming difficult. Every environment feels different, and we're worried about drift.\""
    }
   ]
  },
  {
   "id": "dc-edge",
   "title": "DC Edge · Perimeter Firewall",
   "tag": "Secure Firewall · visibility, response, detection",
   "intro": "A mixed-vendor perimeter, an inherited rulebase and mostly-encrypted traffic leave blind spots and slow response. Restore visibility, speed the response, and modernise detection with the team they have.",
   "tip": "Answers draw on <b>ISE</b> (rapid isolation), <b>Secure Firewall / FMC / Security Cloud Control</b>, <b>EVE</b> for encrypted visibility, and <b>Snort ML</b> for unknown threats.",
   "concerns": [
    {
     "id": "c1",
     "text": "\"When our security tools detect a compromised device, our manual response time is too slow. By the time we identify the user and manually isolate the port, the attacker has already moved through the network.\""
    },
    {
     "id": "c2",
     "text": "\"Our firewall environment has become too complex to manage manually.\""
    },
    {
     "id": "c3",
     "text": "\"Most of our traffic is encrypted, so we've lost visibility into a huge part of our environment.\""
    },
    {
     "id": "c4",
     "text": "\"We're worried traditional signature-based detection won't catch new or unknown attacks quickly enough.\""
    }
   ]
  },
  {
   "id": "segmentation",
   "title": "Macro & Micro Segmentation",
   "tag": "Isovalent + Secure Workload · segmentation &amp; runtime",
   "intro": "A flat data centre and fragmented Kubernetes networking invite east-west movement. Build segmentation Cedarline can adopt safely — with runtime visibility and application-dependency awareness so nothing breaks.",
   "tip": "Answers use <b>Isovalent Cilium</b> (K8s networking/policy) + <b>Tetragon</b> (runtime security), and <b>Cisco Secure Workload</b> for application-dependency mapping before enforcement.",
   "concerns": [
    {
     "id": "c1",
     "text": "\"Network policy helps, but we also need to know what's happening at runtime inside the workload. We need better detection of suspicious behavior and policy violations.\""
    },
    {
     "id": "c2",
     "text": "\"Our Kubernetes networking feels fragmented across clusters and environments. We're dealing with too many moving parts, inconsistent policies, and too much operational complexity.\""
    },
    {
     "id": "c3",
     "text": "\"Right now we're stitching together separate tools for networking, security, and observability in Kubernetes, and it's creating too much overhead.\""
    },
    {
     "id": "c4",
     "text": "\"We know we need microsegmentation, but we don't have enough visibility into east-west flows or application dependencies to create policy safely. We don't want to break the application.\""
    }
   ]
  }
 ],
 "defaultKeys": {
  "ai-security": "Pain point 1 — AI Defense (AI Model and Application Validation)\nSE response: Cisco AI Defense is specifically designed to support Provider obligations under the EU AI Act. We utilize algorithmic red teaming technology for AI Model & App Validation, which identifies safety and security vulnerabilities at scale. By documenting these validation results and maintaining continuous runtime protection, you create a defensible, auditable framework.\nHow it helps: It automates the technical evidence gathering required for \"Conformity Assessments.\" By mapping AI-specific threats to standardized frameworks (like MITRE ATLAS and OWASP), it provides the documentation and continuous monitoring necessary to prove to regulators that your systems are robust and compliant.\n\nPain point 2 — AI Defense (Supply Chain Risk Management)\nSE response: Cisco AI Defense addresses this through proactive Supply Chain Risk Management. We scan your model files, repositories, and MCP servers to identify malicious or unsafe assets. By integrating this into your CI/CD pipeline, we can block compromised AI assets before they are deployed, ensuring that your operational environment remains secure from the start.\nHow it helps: It enables \"Shift-Left\" security by creating an inventory of all AI models and agents. By identifying vulnerabilities before production, it prevents the introduction of malicious code or poisoned data into your ecosystem.\n\nPain point 3 — Cisco AI Defense - AI Cloud Visibility (Ai Cloud Visibility)\nSE response: That's exactly the visibility gap Cisco AI Defense is built to solve. With AI Cloud Visibility, Cisco AI Defense continuously discovers AI assets across distributed cloud environments, including models, agents, datasets, MCP servers, and agent-to-tool workflows. Instead of relying on teams to manually identify what exists, you get a centralized view of your AI attack surface so you can find unsanctioned assets, assess whether they are protected, and bring them under policy.\nHow it helps: dentifies rogue or unsanctioned AI assets Maps relationships across data, models, agents, and tools Gives security teams a single-pane-of-glass view of AI exposure Helps close gaps before unknown AI usage becomes a production risk\n\nPain point 4 — AI Defense = AI visibility and guardrail integration Multicloud Defense = cloud account connection, traffic visibility, policy attachment, and egress enforcement (AI Runtime Protection)\nSE response: That's exactly what the AI Defense-Multicloud Defense integration is designed to address. Cisco AI Defense uses the integration to discover AI assets in your cloud environments and identify external AI destinations your workloads are calling. Then Cisco Multicloud Defense provides the cloud account connectivity, traffic visibility, and egress gateway enforcement point where AI Guardrails Profiles can be applied. In practice, that means you get AI asset visibility plus runtime inspection of prompt and response traffic at the cloud egress layer. AI Defense gives you the AI-specific visibility and guardrail logic, while Multicloud Defense gives you the cloud-network integration and enforcement point.\nHow it helps: Finds AI assets in cloud accounts Identifies third-party AI model usage Uses existing cloud-network control points for enforcement Avoids relying only on application-level changes",
  "cloud-edge": "Pain point 1 — Multicloud Defense (Multicloud Defense Gateways)\nSE response: Multicloud Defense leverages macro and micro-segmentation capabilities to enforce strict communication boundaries. By integrating with our Hybrid Mesh Firewall and Hypershield, we can isolate workloads and inspect traffic between cloud segments, effectively stopping lateral movement before it reaches your sensitive data.\nHow it helps: It provides granular visibility and control over east-west traffic. By applying Zero Trust principles across the hybrid fabric, you transform your network into a series of secure, isolated zones that prevent an attacker from pivoting through your infrastructure.\n\nPain point 2 — Multicloud Defense (Multicloud Defense Visibility)\nSE response: Cisco Multicloud Defense provides unified logging and traceability. Because our security framework is integrated across the network fabric, you can generate consolidated reports that map directly to your compliance requirements (such as NIS2 or DORA) across all cloud environments from a single dashboard.\nHow it helps: It automates the collection of evidence for security audits. By consolidating logs and policy enforcement data, you create a \"single source of truth\" that simplifies compliance reporting and demonstrates proactive governance to regulators.\n\nPain point 3 — Multicloud Defense (Unified Security across public clouds)\nSE response: Cisco Multicloud Defense, integrated within our Hybrid Mesh Firewall architecture, provides a unified control plane. You can define security policies once via Security Cloud Control and enforce them consistently across your entire distributed environment, regardless of the underlying cloud provider.\nHow it helps: It replaces siloed, manual configuration with centralized orchestration. By abstracting the security policy from the cloud-native tools, it ensures that your security posture is uniform and eliminates the \"configuration drift\" that occurs when managing multiple cloud consoles.\n\nPain point 4 — Cisco Secure Workload Cisco Secure Firewall Cisco Secure Firewall Management Center (FMC) Cisco Security Cloud Control (Secure Workload Integration with Secure Firewall Management Center)\nSE response: That's a common hybrid environment challenge. Cisco Secure Workload helps create a more unified segmentation model by using application dependency awareness and AI/ML-driven policy discovery to define policy based on how workloads actually communicate. Cisco Secure Firewall then enforces broader segmentation boundaries at the network layer.\nHow it helps: Reduces policy drift across hybrid and multicloud environments Aligns policy to application behavior, not just static IP-based rules Supports consistent macro and micro controls together",
  "dc-edge": "Pain point 1 — ISE (Security Group Tags (pxGrid integration))\nSE response: Cisco ISE integrates with your security ecosystem via pxGrid and Adaptive Network Control (ANC). When a threat is detected, ISE can automatically trigger a quarantine policy, isolating the compromised device in real-time without requiring manual intervention.\nHow it helps: It automates the \"Response\" phase of the incident lifecycle. By bridging the gap between detection and enforcement, it stops threats at the speed of the network.\n\nPain point 2 — Cisco Security Cloud Control, FMC, FTD (Unified Policy Administration)\nSE response: Cisco applies AI-driven analysis to firewall telemetry and policy data to surface optimization opportunities, reduce manual troubleshooting, and guide cleaner policy administration.\nHow it helps: Reduces manual policy review; identifies redundant/stale rules; lowers risk from human error.\n\nPain point 3 — Cisco Secure Firewall (FTD), FMC, Security Cloud Control (EVE)\nSE response: Encrypted Visibility Engine (EVE) uses AI/ML-based fingerprinting to analyze encrypted traffic patterns and identify suspicious behavior without decrypting the payload.\nHow it helps: Restores visibility into encrypted blind spots; avoids the performance/privacy overhead of decrypt-everything strategies.\n\nPain point 4 — Cisco Secure Firewall (FTD), FMC, Security Cloud Control (Snort ML)\nSE response: That's exactly where Snort ML helps. It adds machine-learning-based detection inside the Snort 3 engine to identify exploit behavior associated with unknown/zero-day threats.\nHow it helps: Addresses the gap between known and unknown threat detection; reduces dependence on signature timing.",
  "segmentation": "Pain point 1 — Isovalent (Tetragon Runtime Security)\nSE response: That's where Tetragon comes in. Tetragon extends the value of Cilium by providing eBPF-based runtime security and threat detection. It monitors system-level activity and network behavior in real time, so you can detect suspicious actions, investigate runtime events, and enforce security policy closer to the workload. In other words, Cilium helps control connectivity and segmentation, while Tetragon helps you understand and secure runtime behavior.\nHow it helps: Adds runtime visibility beyond basic network controls Detects suspicious system and network behavior in real time Strengthens Kubernetes security with deeper workload-level insight\n\nPain point 2 — — (Cilium Networking Policies)\nSE response: That's exactly where Isovalent Cilium helps. Cilium provides a modern, eBPF-based Kubernetes networking layer that gives you consistent connectivity, policy enforcement, and visibility across clusters and environments. Instead of relying on older, IP-centric approaches that struggle in dynamic Kubernetes environments, Cilium enables more scalable and identity-aware networking designed for cloud-native workloads.\nHow it helps: Replaces brittle, IP-centric networking models with a Kubernetes-native approach Improves consistency across dynamic cluster environments Reduces operational complexity with a more unified networking and policy layer\n\nPain point 3 — cilium and tetragon\nSE response: That's exactly the consolidation opportunity Isovalent addresses. With Cilium for networking and policy, and Tetragon for runtime security, you get a more unified platform for connectivity, segmentation, observability, and security. This helps reduce tool sprawl and gives platform and security teams a more integrated operating model.\nHow it helps: Consolidates multiple functions into one platform approach Reduces tool sprawl and operational friction Improves context sharing between networking, security, and operations teams\n\nPain point 4 — Cisco Secure Workload Cisco Secure Firewall (Application dependency mapping)\nSE response: That's one of the biggest reasons customers adopt Cisco Secure Workload. It gives you deep visibility into workload communication and application dependency mapping, so you can see how applications actually behave before enforcing policy. That visibility helps you build segmentation policy with much more confidence, reduce guesswork, and move toward microsegmentation in a controlled way.\nHow it helps: Reveals actual application communication paths Reduces the risk of segmentation causing outages Enables more precise policy design and staged enforcement"
 }
};
