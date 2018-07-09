Basics
======

- Command entry
  - Enter command & start process
  - Style command, argument names/values, strings
- Prompt
  - Style prompt
  - Hook to add information to prompt
  - Style status bar with prompt information
- Window
  - Window styling (transparent background? No border / no title?)
- Process status
  - Style based on command status (running/success/failure)
  - Stop process
  - Kill process
  - Switch focus to process (visual)
  - Detach process?
  - Embed GUI window?
  - Attach process? List unattached processes and view them as commands?
- Output
  - Show stdout/stderr together
  - Expand/collapse stdout/stderr
  - Style stdout/stderr text separately
  - Toggle stdout/stderr in separate sections, or together

Pipe
====



Sessions
========

- Sessions
  - Enter second command & start process
  - Force entry of second command even when previous command is still running
  - Close tab / open tab
  - Close window / open window
  - Allow resumption of a session (but not programs in said session? Are there signals that might let us do that?) when 
  - Maximum disk cache and mem cache requirements
  - Pin sessions
  - Swap out oldest and largest session stdout/stderr to disk cache
- Session Save/Replay
  - Save a session (including timing) (don't restore processes though)
  - Restore a session
  - Save unclosed sessions on shutdown
  - Restore unclosed sessions on startup
  - Save screenshots
  - View/edit session as events with timing between them
- Scripts
  - Drag a set of commands into a script
  - Menu of scripts
  - Turn a session or set of commands into a script, give it a name that can be invoked, let it be editable
  - Suggest "scriptable loops" from repeated commands
  - Suggest "scriptable loops" where commands differ based on output of previous command(s) in loop
- Retry
  - Retry command ("invalidate" later commands if it's an early command) and subsequent commands
  - Process history of each retry (tabs? dropdown of times it was run?)

- Timestamps
  - Timestamp on hover over command or output
  - Toggle timestamps to left of each line
- Environment
  - Allow command to modify environment before next prompt
- User/Privileges
  - Report user and privileges of process
  - Set user and privileges before running
  - Administrator command prompt
