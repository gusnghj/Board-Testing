import React, { memo } from 'react'

const TargetForAction = memo(() => {
  console.log("TFA render")
  return (
    <div>TargetForAction</div>
  )
}, (old, newp) => {
  console.log(old, newp);
});

export default TargetForAction