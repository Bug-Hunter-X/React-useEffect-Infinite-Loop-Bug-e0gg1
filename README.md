# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving the `useEffect` hook.  The bug occurs when the dependency array is missing or incorrect, causing the effect to run repeatedly, leading to an infinite loop. The solution involves correctly specifying dependencies to prevent unnecessary re-renders.