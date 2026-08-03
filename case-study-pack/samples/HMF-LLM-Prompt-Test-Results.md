# HMF LLM Grading Prompt, Test Results

Three sample completed Workbooks were graded by running `HMF-LLM-Grading-Prompt.md`
on a clean LLM instance (one per team, each given only the prompt and that team's
answers, exactly as a facilitator would use it). The prompt scored and
differentiated the three teams consistently with the Grading Guide rubric.

## Results

| Sample team | Authored quality | Case Study scores (/100) | Overall (/400) | Category |
|---|---|---|---|---|
| Team A | Strong: names the requirement, the right product, and a clear how + outcome (used two acceptable alternatives) | 79, 83, 85, 76 | **323** | **Best** |
| Team B | Mixed: nails the requirement and the right product and capability, but generic value with no concrete outcome | 64, 64, 64, 64 | **256** | **Better** |
| Team C | Developing: default or blank products, generic one-line responses | 8, 10, 10, 8 | **36** | **Good** |

## What the test confirmed

- **The three dimensions score independently.** Team B earned full Problem Identifier
  marks and Substantial Solution Designer marks, but Developing Value Communicator
  marks, landing mid-band exactly as designed.
- **Acceptable alternatives are credited.** Team A's Hypershield and Secure Workload
  answers earned Solution Designer credit where the reasoning fit.
- **Inconsistencies are caught.** On one pain point Team A named Hypershield but the
  response text described a different integration; the grader docked it and said why.
- **Blanks score zero.** Team C's blank products and responses scored 0 on those
  dimensions, and generic default products (a firewall for an AI concern) scored Minimal,
  while a firewall for the one genuine firewall concern earned partial credit.
- **Positive overall categories** (Best / Better / Good) were applied to the cumulative
  score, matching the Grading Guide.

## How to reproduce

1. Open `HMF-LLM-Grading-Prompt.md` and copy the whole prompt into Claude or ChatGPT.
2. Paste one sample file (`HMF-Sample-Team-A.txt`, `-Team-B.txt`, or `-Team-C.txt`)
   between the `--- BEGIN TEAM SUBMISSION ---` and `--- END TEAM SUBMISSION ---` markers.
3. The model returns per-pain-point dimension scores, a case study score out of 100 with
   a grade, a cumulative score out of 400, the overall category, and feedback.

_Note: LLM scores can vary slightly run to run. Use the prompt as a fast first-pass or
tie-break aid alongside proctor judgement, and have a Cisco SME validate the embedded
answer key before a large event._
