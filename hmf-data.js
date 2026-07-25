/* HMF Design Clinic — shared content (generated from the aligned use-case sheet).
   Consumed by index.html (participant app) and proctor.html. */
window.HMF_DATA = {
 "useCases": [
  {
   "id": "ai-security",
   "title": "AI Security",
   "tag": "AI Defense · runtime, compliance, supply chain",
   "intro": "Cedarline’s AI apps are live and exposed, and AI assets are spreading across the clouds faster than security can see them.",
   "tip": "Most answers here are <b>Cisco AI Defense</b> capabilities — runtime guardrails, model/app validation, supply-chain scanning, AI cloud visibility — plus <b>ISE</b> for device visibility.",
   "concerns": [
    {
     "id": "c1",
     "text": "\"Our production AI applications are exposed to users, and we are worried about adversarial attacks like prompt injection or data exfiltration. How do we protect these apps in real-time without slowing down the user experience?\""
    },
    {
     "id": "c2",
     "text": "\"Under the EU AI Act, we are classified as a 'Provider' for our internal AI systems. We need to demonstrate robustness and cybersecurity compliance to satisfy Article 15. How does Cisco help us meet these specific requirements?\""
    },
    {
     "id": "c3",
     "text": "\"We are integrating various open-source models and third-party agents into our internal workflows. How can we ensure these assets aren't introducing vulnerabilities into our environment before they even go live?\""
    },
    {
     "id": "c4",
     "text": "\"We have thousands of IoT devices, printers, and guest users connecting to our network. We have no visibility into what these devices are or if they are compromised, leaving us vulnerable to unauthorized access.\""
    },
    {
     "id": "c5",
     "text": "“We know AI is showing up across our cloud environments faster than security can track it. We’re worried we have models, agents, datasets, and MCP-connected tools running without visibility or consistent controls.”"
    },
    {
     "id": "c6",
     "text": "“We’re concerned that vulnerable or compromised models, repositories, or MCP servers could enter development before we catch them. Traditional controls aren’t designed to inspect the AI supply chain.”"
    },
    {
     "id": "c7",
     "text": "“We’re running AI workloads in cloud accounts, but we don’t have a reliable way to see which models and AI assets are actually in use. We’re also concerned about workloads reaching out to third-party AI models without security knowing about it. And even when we do know the traffic path, we need a practical way to inspect and enforce guardrails on prompt and response traffic in the cloud without changing every application.”"
    }
   ]
  },
  {
   "id": "cloud-edge",
   "title": "Cloud Edge",
   "tag": "Multicloud · consistency & containment",
   "intro": "Workloads sprawl across AWS, Azure, GCP and on-prem — inconsistent policy, configuration drift, and lateral-movement risk.",
   "tip": "Think <b>one control plane</b>: Multicloud Defense + Security Cloud Control; ISE for consistent identity-based access.",
   "concerns": [
    {
     "id": "c1",
     "text": "“We’re deploying across AWS, Azure, and GCP, but each cloud has its own constructs and workflows.”"
    },
    {
     "id": "c2",
     "text": "\"If a breach occurs in one of our public cloud instances, we are terrified that the attacker will move laterally into our core on-premises systems. How can we contain these threats in a multicloud environment?\""
    },
    {
     "id": "c3",
     "text": "\"Our auditors require proof that our security controls are applied consistently across all our cloud workloads. Gathering this data from different cloud providers is a manual, time-consuming nightmare.\""
    },
    {
     "id": "c4",
     "text": "\"Our employees work from the office, home, and coffee shops. We are struggling to maintain a consistent security policy across these different locations, leading to complex, fragmented rule sets that are hard to manage.\""
    },
    {
     "id": "c5",
     "text": "\"We have workloads spread across AWS, Azure, and on-premises data centers. Managing security policies individually in each cloud environment is creating massive operational overhead and leading to inconsistent security posture.\""
    },
    {
     "id": "c6",
     "text": "“We have workloads on-prem, in cloud, and in mixed environments, and policy consistency is becoming difficult. Every environment feels different, and we’re worried about drift.”"
    }
   ]
  },
  {
   "id": "dc-edge",
   "title": "DC Edge · Perimeter Firewall",
   "tag": "Perimeter · visibility & policy",
   "intro": "A complex, mixed-vendor firewall estate with encrypted blind spots, unknown threats, and slow manual response.",
   "tip": "Secure Firewall + FMC + Security Cloud Control; <b>EVE</b> for encrypted visibility, <b>Snort ML</b> for unknown threats, <b>ISE</b> for automated response.",
   "concerns": [
    {
     "id": "c1",
     "text": "\"When our security tools detect a compromised device, our manual response time is too slow. By the time we identify the user and manually isolate the port, the attacker has already moved through the network.\""
    },
    {
     "id": "c2",
     "text": "“We’re worried that once an attacker gets into the environment, they can move laterally across applications.”"
    },
    {
     "id": "c3",
     "text": "“Our firewall environment has become too complex to manage manually.”"
    },
    {
     "id": "c4",
     "text": "“Most of our traffic is encrypted, so we’ve lost visibility into a huge part of our environment.”"
    },
    {
     "id": "c5",
     "text": "“We’re worried traditional signature-based detection won’t catch new or unknown attacks quickly enough.”"
    }
   ]
  },
  {
   "id": "segmentation",
   "title": "Macro & Micro Segmentation",
   "tag": "East-west · workload & Kubernetes",
   "intro": "The data centre and Kubernetes are wide open east-west; policy must follow the workload — safely, without breaking apps.",
   "tip": "<b>Secure Workload</b> for dependency-aware policy, <b>Hypershield / N9300</b> for fabric enforcement, <b>Isovalent Cilium + Tetragon</b> for Kubernetes.",
   "concerns": [
    {
     "id": "c1",
     "text": "“We don’t feel like we have enough control over east-west movement inside the data center.”"
    },
    {
     "id": "c2",
     "text": "“Network policy helps, but we also need to know what’s happening at runtime inside the workload. We need better detection of suspicious behavior and policy violations.”"
    },
    {
     "id": "c3",
     "text": "“Our Kubernetes environment changes too fast for traditional segmentation approaches. We need policy at the service and container level, with visibility into microservice communication.”"
    },
    {
     "id": "c4",
     "text": "“Our Kubernetes networking feels fragmented across clusters and environments. We’re dealing with too many moving parts, inconsistent policies, and too much operational complexity.”"
    },
    {
     "id": "c5",
     "text": "“Pods and services are constantly changing, so traditional IP-based policy is hard to maintain. We need segmentation that actually follows the application.”"
    },
    {
     "id": "c6",
     "text": "“Right now we’re stitching together separate tools for networking, security, and observability in Kubernetes, and it’s creating too much overhead.”"
    },
    {
     "id": "c7",
     "text": "“We know we need microsegmentation, but we don’t have enough visibility into east-west flows or application dependencies to create policy safely. We don’t want to break the application.”"
    },
    {
     "id": "c8",
     "text": "“We like the idea of workload-level enforcement, but in some environments we can’t install agents on every system. We still need segmentation coverage for those workloads.”"
    },
    {
     "id": "c9",
     "text": "“We need Kubernetes networking and security that can perform at scale, support mission-critical workloads, and integrate with the rest of our enterprise tooling.”"
    }
   ]
  }
 ],
 "defaultKeys": {
  "ai-security": "Pain point 1: Our production AI applications are exposed to users, and we are worried about adversarial attacks like prompt injection or data exfiltration. How do we protect these apps in real-time without slowing down the user experience?\n  Expected product(s): AI Defense\n  Model SE response: \"AI Defense provides AI Runtime Protection by embedding guardrails directly into the network fabric. This allows us to inspect traffic in both directions, detecting and blocking prompt injections, response manipulation, and sensitive data leakage in real-time.\"\n  How it helps: It provides a \"defense-in-depth\" approach that is decoupled from the application code. Because the protection is embedded in the network, it enforces security policies consistently across all AI workloads without requiring developers to rewrite application-level security logic.\n\nPain point 2: Under the EU AI Act, we are classified as a 'Provider' for our internal AI systems. We need to demonstrate robustness and cybersecurity compliance to satisfy Article 15. How does Cisco help us meet these specific requirements?\n  Expected product(s): AI Defense\n  Model SE response: \"Cisco AI Defense is specifically designed to support Provider obligations under the EU AI Act. We utilize algorithmic red teaming technology for AI Model & App Validation, which identifies safety and security vulnerabilities at scale. By documenting these validation results and maintaining continuous runtime protection, you create a defensible, auditable framework.\"\n  How it helps: It automates the technical evidence gathering required for \"Conformity Assessments.\" By mapping AI-specific threats to standardized frameworks (like MITRE ATLAS and OWASP), it provides the documentation and continuous monitoring necessary to prove to regulators that your systems are robust and compliant.\n\nPain point 3: We are integrating various open-source models and third-party agents into our internal workflows. How can we ensure these assets aren't introducing vulnerabilities into our environment before they even go live?\n  Expected product(s): AI Defense\n  Model SE response: \"Cisco AI Defense addresses this through proactive Supply Chain Risk Management. We scan your model files, repositories, and MCP servers to identify malicious or unsafe assets. By integrating this into your CI/CD pipeline, we can block compromised AI assets before they are deployed, ensuring that your operational environment remains secure from the start.\"\n  How it helps: It enables \"Shift-Left\" security by creating an inventory of all AI models and agents. By identifying vulnerabilities before production, it prevents the introduction of malicious code or poisoned data into your ecosystem.\n\nPain point 4: We have thousands of IoT devices, printers, and guest users connecting to our network. We have no visibility into what these devices are or if they are compromised, leaving us vulnerable to unauthorized access.\n  Expected product(s): ISE\n  Model SE response: \"Cisco ISE provides comprehensive visibility through advanced device profiling and posture assessment. By identifying every device at the point of connection, ISE enforces dynamic policies that ensure only authenticated and compliant devices can access the network segments they need.\"\n  How it helps: It replaces \"open\" network access with a Zero Trust approach. By automating the classification and authorization of every endpoint, it eliminates the security gaps created by unmanaged devices.\n\nPain point 5: We know AI is showing up across our cloud environments faster than security can track it. We’re worried we have models, agents, datasets, and MCP-connected tools running without visibility or consistent controls.\n  Expected product(s): Cisco AI Defense – AI Cloud Visibility\n  Model SE response: “That’s exactly the visibility gap Cisco AI Defense is built to solve. With AI Cloud Visibility, Cisco AI Defense continuously discovers AI assets across distributed cloud environments, including models, agents, datasets, MCP servers, and agent-to-tool workflows. Instead of relying on teams to manually identify what exists, you get a centralized view of your AI attack surface so you can find unsanctioned assets, assess whether they are protected, and bring them under policy.”\n  How it helps: dentifies rogue or unsanctioned AI assets; Maps relationships across data, models, agents, and tools; Gives security teams a single-pane-of-glass view of AI exposure; Helps close gaps before unknown AI usage becomes a production risk\n\nPain point 6: We’re concerned that vulnerable or compromised models, repositories, or MCP servers could enter development before we catch them. Traditional controls aren’t designed to inspect the AI supply chain.\n  Expected product(s): Cisco AI Defense – AI Supply Chain Risk Management\n  Model SE response: “That’s where Cisco AI Defense Supply Chain Risk Management comes in. AI Defense scans model files, repositories, MCP servers, and tools for hidden risks such as malicious code, poisoned data, unsafe components, and compromised assets. It also generates per-asset risk scores, so you can apply policy-based gating decisions and stop high-risk components before they move into development or production. That gives you a much stronger control point earlier in the AI lifecycle.”\n  How it helps: Detects risk before deployment; Identifies compromised or tampered models, datasets, tools, and MCP assets; Supports risk-based gating instead of ad hoc judgment; Helps prevent unsafe components from entering production pipelines\n\nPain point 7: We’re running AI workloads in cloud accounts, but we don’t have a reliable way to see which models and AI assets are actually in use. We’re also concerned about workloads reaching out to third-party AI models without security knowing about it. And even when we do know the traffic path, we need a practical way to inspect and enforce guardrails on prompt and response traffic in the cloud without changing every application.\n  Expected product(s): AI Defense = AI visibility and guardrail integration\nMulticloud Defense = cloud account connection, traffic visibility, policy attachment, and egress enforcement\n  Model SE response: “That’s exactly what the AI Defense–Multicloud Defense integration is designed to address. Cisco AI Defense uses the integration to discover AI assets in your cloud environments and identify external AI destinations your workloads are calling. Then Cisco Multicloud Defense provides the cloud account connectivity, traffic visibility, and egress gateway enforcement point where AI Guardrails Profiles can be applied.\nIn practice, that means you get AI asset visibility plus runtime inspection of prompt and response traffic at the cloud egress layer. AI Defense gives you the AI-specific visibility and guardrail logic, while Multicloud Defense gives you the cloud-network integration and enforcement point.”\n  How it helps: Finds AI assets in cloud accounts; Identifies third-party AI model usage; Uses existing cloud-network control points for enforcement; Avoids relying only on application-level changes\n",
  "cloud-edge": "Pain point 1: We’re deploying across AWS, Azure, and GCP, but each cloud has its own constructs and workflows.\n  Expected product(s): Cisco Multicloud Defense, FTDv, Security Cloud Control\n  Model SE response: “Cisco Multicloud Defense provides a centralized orchestration layer so you can define security intent once and apply it consistently across cloud environments.”\n  How it helps: Reduces policy drift; centralizes orchestration; provides operational consistency across clouds.\n  Upsell: Cisco Secure Workload\n\nPain point 2: If a breach occurs in one of our public cloud instances, we are terrified that the attacker will move laterally into our core on-premises systems. How can we contain these threats in a multicloud environment?\n  Expected product(s): Multicloud Defense\n  Model SE response: \"Multicloud Defense leverages macro and micro-segmentation capabilities to enforce strict communication boundaries. By integrating with our Hybrid Mesh Firewall and Hypershield, we can isolate workloads and inspect traffic between cloud segments, effectively stopping lateral movement before it reaches your sensitive data.\"\n  How it helps: It provides granular visibility and control over east-west traffic. By applying Zero Trust principles across the hybrid fabric, you transform your network into a series of secure, isolated zones that prevent an attacker from pivoting through your infrastructure.\n\nPain point 3: Our auditors require proof that our security controls are applied consistently across all our cloud workloads. Gathering this data from different cloud providers is a manual, time-consuming nightmare.\n  Expected product(s): Multicloud Defense\n  Model SE response: \"Cisco Multicloud Defense provides unified logging and traceability. Because our security framework is integrated across the network fabric, you can generate consolidated reports that map directly to your compliance requirements (such as NIS2 or DORA) across all cloud environments from a single dashboard.\"\n  How it helps: It automates the collection of evidence for security audits. By consolidating logs and policy enforcement data, you create a \"single source of truth\" that simplifies compliance reporting and demonstrates proactive governance to regulators.\n\nPain point 4: Our employees work from the office, home, and coffee shops. We are struggling to maintain a consistent security policy across these different locations, leading to complex, fragmented rule sets that are hard to manage.\n  Expected product(s): ISE\n  Model SE response: \"Cisco ISE acts as the centralized Policy Decision Point (PDP) for your entire organization. Whether a user is connecting via VPN, Wi-Fi, or wired Ethernet, ISE applies the same identity-based policies, ensuring a seamless and secure experience regardless of the user's location.\"\n  How it helps: It centralizes policy management, removing the need to manage disparate rules for different access methods. This provides a unified \"source of truth\" for identity-based access control.\n\nPain point 5: We have workloads spread across AWS, Azure, and on-premises data centers. Managing security policies individually in each cloud environment is creating massive operational overhead and leading to inconsistent security posture.\n  Expected product(s): Multicloud Defense\n  Model SE response: \"Cisco Multicloud Defense, integrated within our Hybrid Mesh Firewall architecture, provides a unified control plane. You can define security policies once via Security Cloud Control and enforce them consistently across your entire distributed environment, regardless of the underlying cloud provider.\"\n  How it helps: It replaces siloed, manual configuration with centralized orchestration. By abstracting the security policy from the cloud-native tools, it ensures that your security posture is uniform and eliminates the \"configuration drift\" that occurs when managing multiple cloud consoles.\n\nPain point 6: We have workloads on-prem, in cloud, and in mixed environments, and policy consistency is becoming difficult. Every environment feels different, and we’re worried about drift.\n  Expected product(s): Cisco Secure Workload\nCisco Secure Firewall\nCisco Secure Firewall Management Center (FMC)\nCisco Security Cloud Control\n  Model SE response: “That’s a common hybrid environment challenge. Cisco Secure Workload helps create a more unified segmentation model by using application dependency awareness and AI/ML-driven policy discovery to define policy based on how workloads actually communicate. Cisco Secure Firewall then enforces broader segmentation boundaries at the network layer.\n  How it helps: Reduces policy drift across hybrid and multicloud environments; Aligns policy to application behavior, not just static IP-based rules; Supports consistent macro and micro controls together\n",
  "dc-edge": "Pain point 1: When our security tools detect a compromised device, our manual response time is too slow. By the time we identify the user and manually isolate the port, the attacker has already moved through the network.\n  Expected product(s): ISE\n  Model SE response: \"Cisco ISE integrates with your security ecosystem via pxGrid and Adaptive Network Control (ANC). When a threat is detected, ISE can automatically trigger a quarantine policy, isolating the compromised device in real-time without requiring manual intervention.\"\n  How it helps: It automates the \"Response\" phase of the incident lifecycle. By bridging the gap between detection and enforcement, it stops threats at the speed of the network.\n\nPain point 2: We’re worried that once an attacker gets into the environment, they can move laterally across applications.\n  Expected product(s): Cisco Secure Firewall, FMC, Secure Workload\n  Model SE response: “Cisco Secure Firewall gives you macro segmentation at the network level, while Secure Workload adds microsegmentation to enforce least-privilege access at the workload level.”\n  How it helps: Reduces lateral movement risk; provides granular workload-level policy; bridges network and workload security.\n  Upsell: Isovalent (for Kubernetes)\n\nPain point 3: Our firewall environment has become too complex to manage manually.\n  Expected product(s): Cisco Security Cloud Control, FMC, FTD\n  Model SE response: “Cisco applies AI-driven analysis to firewall telemetry and policy data to surface optimization opportunities, reduce manual troubleshooting, and guide cleaner policy administration.”\n  How it helps: Reduces manual policy review; identifies redundant/stale rules; lowers risk from human error.\n  Upsell: Cisco Secure Workload\n\nPain point 4: Most of our traffic is encrypted, so we’ve lost visibility into a huge part of our environment.\n  Expected product(s): Cisco Secure Firewall (FTD), FMC, Security Cloud Control\n  Model SE response: “Encrypted Visibility Engine (EVE) uses AI/ML-based fingerprinting to analyze encrypted traffic patterns and identify suspicious behavior without decrypting the payload.”\n  How it helps: Restores visibility into encrypted blind spots; avoids the performance/privacy overhead of decrypt-everything strategies.\n  Upsell: Cisco Secure Workload, Hypershield\n\nPain point 5: We’re worried traditional signature-based detection won’t catch new or unknown attacks quickly enough.\n  Expected product(s): Cisco Secure Firewall (FTD), FMC, Security Cloud Control\n  Model SE response: “That’s exactly where Snort ML helps. It adds machine-learning-based detection inside the Snort 3 engine to identify exploit behavior associated with unknown/zero-day threats.”\n  How it helps: Addresses the gap between known and unknown threat detection; reduces dependence on signature timing.\n  Upsell: Cisco Secure Workload, Hypershield\n",
  "segmentation": "Pain point 1: We don’t feel like we have enough control over east-west movement inside the data center.\n  Expected product(s): Cisco Hypershield, N9300 Series Smart Switches, Nexus Dashboard\n  Model SE response: “Cisco Hypershield, working with N9300 Series Smart Switches, brings stateful Layer-4 segmentation directly into the data center fabric, enforcing controls closer to the workload.”\n  How it helps: Enforces segmentation inside the DC; contains threats; reduces lateral movement risk.\n  Upsell: Cisco Secure Workload\n\nPain point 2: Network policy helps, but we also need to know what’s happening at runtime inside the workload. We need better detection of suspicious behavior and policy violations.\n  Expected product(s): Tetragon\n  Model SE response: “That’s where Tetragon comes in. Tetragon extends the value of Cilium by providing eBPF-based runtime security and threat detection. It monitors system-level activity and network behavior in real time, so you can detect suspicious actions, investigate runtime events, and enforce security policy closer to the workload. In other words, Cilium helps control connectivity and segmentation, while Tetragon helps you understand and secure runtime behavior.”\n  How it helps: Adds runtime visibility beyond basic network controls; Detects suspicious system and network behavior in real time; Strengthens Kubernetes security with deeper workload-level insight\n\nPain point 3: Our Kubernetes environment changes too fast for traditional segmentation approaches. We need policy at the service and container level, with visibility into microservice communication.\n  Expected product(s): Isovalent Cilium\n  Model SE response: “That’s where Isovalent comes in. For Kubernetes environments, Isovalent provides Kubernetes-native segmentation and network policy enforcement, along with observability and runtime security capabilities designed for cloud-native workloads.\n  How it helps: Built for dynamic Kubernetes environments; Enables granular network policy for microservices; Improves visibility and control inside clusters; Better matches the pace and architecture of containerized applications\n\nPain point 4: Our Kubernetes networking feels fragmented across clusters and environments. We’re dealing with too many moving parts, inconsistent policies, and too much operational complexity.\n  Expected product(s): —\n  Model SE response: “That’s exactly where Isovalent Cilium helps. Cilium provides a modern, eBPF-based Kubernetes networking layer that gives you consistent connectivity, policy enforcement, and visibility across clusters and environments. Instead of relying on older, IP-centric approaches that struggle in dynamic Kubernetes environments, Cilium enables more scalable and identity-aware networking designed for cloud-native workloads.”\n  How it helps: Replaces brittle, IP-centric networking models with a Kubernetes-native approach; Improves consistency across dynamic cluster environments; Reduces operational complexity with a more unified networking and policy layer\n\nPain point 5: Pods and services are constantly changing, so traditional IP-based policy is hard to maintain. We need segmentation that actually follows the application.\n  Expected product(s): cilium\n  Model SE response: “That’s one of the biggest advantages of Cilium. It enables identity-based network policy and micro-segmentation for Kubernetes, so policy can align to workloads and services rather than static IP addresses. That gives you more durable and precise segmentation in environments where workloads are ephemeral and constantly changing.”\n  How it helps: Supports Kubernetes-native micro-segmentation; Aligns policy to workload identity, not just IP address; Improves least-privilege enforcement inside clusters\n\nPain point 6: Right now we’re stitching together separate tools for networking, security, and observability in Kubernetes, and it’s creating too much overhead.\n  Expected product(s): cilium and tetragon\n  Model SE response: “That’s exactly the consolidation opportunity Isovalent addresses. With Cilium for networking and policy, and Tetragon for runtime security, you get a more unified platform for connectivity, segmentation, observability, and security. This helps reduce tool sprawl and gives platform and security teams a more integrated operating model.”\n  How it helps: Consolidates multiple functions into one platform approach; Reduces tool sprawl and operational friction; Improves context sharing between networking, security, and operations teams\n\nPain point 7: We know we need microsegmentation, but we don’t have enough visibility into east-west flows or application dependencies to create policy safely. We don’t want to break the application.\n  Expected product(s): Cisco Secure Workload\nCisco Secure Firewall\n  Model SE response: “That’s one of the biggest reasons customers adopt Cisco Secure Workload. It gives you deep visibility into workload communication and application dependency mapping, so you can see how applications actually behave before enforcing policy.\nThat visibility helps you build segmentation policy with much more confidence, reduce guesswork, and move toward microsegmentation in a controlled way.”\n  How it helps: Reveals actual application communication paths; Reduces the risk of segmentation causing outages; Enables more precise policy design and staged enforcement\n\nPain point 8: We like the idea of workload-level enforcement, but in some environments we can’t install agents on every system. We still need segmentation coverage for those workloads.\n  Expected product(s): Cisco Secure Firewall, FMC, Secure Workload\n  Model SE response: “Cisco Secure Workload supports both agent-based and agentless approaches. Where agents can’t be deployed, Cisco Secure Firewall can act as the enforcement point for segmentation policy on east-west traffic.”\n  How it helps: Supports flexible enforcement models; Extends segmentation to workloads that cannot host agents; Preserves segmentation strategy across mixed environments\n\nPain point 9: We need Kubernetes networking and security that can perform at scale, support mission-critical workloads, and integrate with the rest of our enterprise tooling.\n  Expected product(s): —\n  Model SE response: “That’s where the eBPF-based architecture matters. Cilium delivers high-performance networking and policy enforcement with low overhead, while Tetragon adds runtime security visibility without requiring a traditional heavy agent model. On top of that, the Isovalent Enterprise Platform provides enterprise-grade support, hardened releases, and integrations with broader environments and tools, including analytics and security ecosystems.”\n  How it helps: High-performance architecture for large-scale Kubernetes environments; Enterprise-grade support and lifecycle management; Better integration into existing enterprise security and observability operations\n  Upsell: Splunk, Hypershield\n"
 }
};
