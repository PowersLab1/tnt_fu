## Overall Structure:
- Participants first learn image-word pairs (not shown in the provided code)
- Later (day 2), they see those images again and are instructed to either:
  - **Think** about the associated word (cued by green stripes)
  - **Not think** about the associated word (cued by red checkerboard)

## Main Scripts:

1. **TNT_actual.m**: 
   - Runs the main experimental trials
   - Presents images with "think" or "no_think" cues
   - Records participant responses and timing
   - Supports eye tracking and MRI synchronization

2. **TNT_practice.m**:
   - Provides practice trials using images not included in the main experiment
   - Familiarizes participants with the task structure
   - Uses the same visual cues as the main task

3. **tnt_protocol.m**:
   - Master script that orchestrates the entire experiment
   - Sets up directories, stimulus presentation, and recording
   - Configures visual stimuli (green stripes/red checkerboard)
   - Handles randomization of image assignment to conditions
   - Presents instructions and runs both practice and main trials

4. **tnt_day2_main_task.m**:
   - Updated version specifically for day 2 testing
   - Loads data from previous sessions
   - Similar functionality to tnt_protocol but streamlined for the main task
