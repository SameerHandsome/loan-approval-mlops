"use strict";(self.webpackChunk_mlflow_mlflow=self.webpackChunk_mlflow_mlflow||[]).push([[1299],{91299:function(e,n,t){t.d(n,{r:function(){return G}});var a=t(68248),o=t(76118),r=t(74060),i=t(27757),s=t(46709),l=t(91105);const d="compareToRunUuid",u=()=>{var e;const[n,t]=(0,l.ok)();return[null!==(e=n.get(d))&&void 0!==e?e:void 0,(0,s.useCallback)((e=>{t((n=>void 0===e?(n.delete(d),n):(n.set(d,e),n)))}),[t])]};var c=t(16389),m=t(66916),p=t(49620),g=t(42747),v=t(60284),f=t(92831),h=t(67063),y=t(73408);var T={name:"a41n9l",styles:"justify-content:flex-start !important"},x={name:"0",styles:""},I={name:"bcffy2",styles:"display:flex;align-items:center;justify-content:space-between"},C={name:"fhxb3m",styles:"display:flex;flex-direction:row;align-items:center"},b={name:"a41n9l",styles:"justify-content:flex-start !important"};const Y=({experimentId:e,currentRunUuid:n,setCompareToRunUuid:t,compareToRunUuid:o,setCurrentRunUuid:l})=>{const{theme:d}=(0,i.u)(),u=(0,g.tz)(),c=(0,p.LE)(),{runInfos:Y}=(0,f.Xz)(e),w=(0,s.useMemo)((()=>{if(Y)return Y.map((e=>{var n;return{key:e.runUuid,value:null!==(n=e.runName)&&void 0!==n?n:e.runUuid}})).filter((e=>e.key))}),[Y]),U=(0,s.useMemo)((()=>{if(Y)return Y.filter((e=>e.runUuid!==n)).map((e=>{var n;return{key:e.runUuid,value:null!==(n=e.runName)&&void 0!==n?n:e.runUuid}})).filter((e=>Boolean(e.key)))}),[Y,n]),S=null===Y||void 0===Y?void 0:Y.find((e=>e.runUuid===n)),R=null===Y||void 0===Y?void 0:Y.find((e=>e.runUuid===o)),N=(0,s.useCallback)((n=>{const t=v.Ay.getRunPageRoute(e,n)+"/evaluations",a=new URLSearchParams(window.location.search),o=new URL(t,window.location.origin);a.forEach(((e,n)=>{o.searchParams.set(n,e)})),window.location.href=o.toString()}),[e]),D=null!==l&&void 0!==l?l:N;return n?(0,y.FD)("div",{css:(0,a.AH)({display:"flex",gap:d.spacing.sm,alignItems:"center"},""),children:[(0,y.Y)("div",{css:(0,a.AH)({display:"flex",alignItems:"center",justifyContent:"flex-start",gap:d.spacing.sm},""),children:(0,y.FD)(r.DialogCombobox,{componentId:f.WB,id:"compare-to-run-combobox",value:n?[n]:void 0,children:[(0,y.Y)(r.DialogComboboxCustomButtonTriggerWrapper,{children:(0,y.Y)(i.B,{endIcon:(0,y.Y)(r.ChevronDownIcon,{}),componentId:"mlflow.evaluations_review.table_ui.compare_to_run_button",css:T,children:(0,y.FD)("div",{css:(0,a.AH)({display:"flex",gap:d.spacing.sm,alignItems:"center",fontSize:`${d.typography.fontSizeSm}px !important`},""),children:[(0,y.Y)(h.E,{color:c(n)}),null!==S&&void 0!==S&&S.runName?(0,y.Y)(i.T.Hint,{children:null===S||void 0===S?void 0:S.runName}):u.formatMessage({id:"PUQxu5",defaultMessage:"Select baseline run"})]})})}),(0,y.Y)(r.DialogComboboxContent,{children:(0,y.Y)(r.DialogComboboxOptionList,{children:(w||[]).map(((e,t)=>(0,y.Y)(r.DialogComboboxOptionListSelectItem,{value:e.value,onChange:n=>D(e.key),checked:e.key===n,children:(0,y.FD)("div",{css:(0,a.AH)({display:"flex",gap:d.spacing.sm,alignItems:"center"},""),children:[(0,y.Y)(h.E,{color:c(e.key)}),e.value]})},t)))})})]})}),(0,y.Y)("span",{css:x,children:u.formatMessage({id:"iYmFCZ",defaultMessage:"compare to"})}),t&&(0,y.Y)("div",{css:I,children:(0,y.FD)("div",{css:C,children:[(0,y.FD)(r.DialogCombobox,{componentId:f.WB,id:"compare-to-run-combobox",value:o?[o]:void 0,children:[(0,y.Y)(r.DialogComboboxCustomButtonTriggerWrapper,{children:(0,y.Y)(i.B,{endIcon:(0,y.Y)(r.ChevronDownIcon,{}),componentId:"mlflow.evaluations_review.table_ui.compare_to_run_button",css:b,children:(0,y.Y)("div",{css:(0,a.AH)({display:"flex",gap:d.spacing.sm,alignItems:"center",fontSize:`${d.typography.fontSizeSm}px !important`},""),children:null!==R&&void 0!==R&&R.runName?(0,y.FD)(y.FK,{children:[(0,y.Y)(h.E,{color:c(o)}),(0,y.Y)(i.T.Hint,{children:null===R||void 0===R?void 0:R.runName})]}):(0,y.Y)("span",{css:(0,a.AH)({color:d.colors.textPlaceholder},""),children:u.formatMessage({id:"XkpMf+",defaultMessage:"baseline run"})})})})}),(0,y.Y)(r.DialogComboboxContent,{children:(0,y.Y)(r.DialogComboboxOptionList,{children:(U||[]).map(((e,n)=>(0,y.Y)(r.DialogComboboxOptionListSelectItem,{value:e.value,onChange:n=>t(e.key),checked:e.key===o,children:(0,y.FD)("div",{css:(0,a.AH)({display:"flex",gap:d.spacing.sm,alignItems:"center"},""),children:[(0,y.Y)(h.E,{color:c(e.key)}),e.value]})},n)))})})]}),(null===R||void 0===R?void 0:R.runName)&&(0,y.Y)(m.X,{"aria-hidden":"false",css:(0,a.AH)({color:d.colors.textPlaceholder,fontSize:d.typography.fontSizeSm,marginLeft:d.spacing.sm,":hover":{color:d.colors.actionTertiaryTextHover}},""),role:"button",onClick:()=>{t(void 0)},onPointerDownCapture:e=>{e.stopPropagation()}})]})})]}):(0,y.Y)(y.FK,{})};var w=t(31655),U=t(69986),S=t(26765);const R=e=>(0,s.useMemo)((()=>e?(0,o.intersection)((0,S.T)(e),[f.o8.Evaluations,f.o8.Metrics,f.o8.Assessments]):[]),[e]);var N=t(33656),D=t(88525),E=t(40720),A=t(40724),k=t(56530),M=t(5690),_=t(38232),F=t(65765),H=t(43233);const $="_assessments.json",L=()=>{const e=(0,k.wA)(),[n,t]=(0,s.useState)(!1);return{savePendingAssessments:(0,s.useCallback)((async(n,a,r)=>{try{t(!0);const i=await(async e=>{const n=(0,F.To)($,e),t=await(0,F.Up)(n).then((e=>JSON.parse(e)));if(!(0,o.isArray)(t.data)||!(0,o.isArray)(t.columns))throw new Error("Artifact is malformed and/or not valid JSON");return t})(n),s=((e,n)=>n.map((n=>{var t,a,o;return[e,n.name,{source_type:null===(t=n.source)||void 0===t?void 0:t.sourceType,source_id:null===(a=n.source)||void 0===a?void 0:a.sourceId,source_metadata:null===(o=n.source)||void 0===o?void 0:o.metadata},n.timestamp||null,n.booleanValue||null,n.numericValue||null,n.stringValue||null,n.rationale||null,n.metadata||null,null,null]})))(a,r),l=((e,n,t)=>{const a=(0,_.G4)($,n),r=t.map((({name:e,source:n})=>({name:e,source:n?{source_type:n.sourceType,source_id:n.sourceId,source_metadata:n.metadata}:void 0}))),i=a.entries.filter((({evaluation_id:n,name:t,source:a})=>e===n&&r.find((e=>(0,o.isEqual)({name:t,source:a},e))))).map((e=>a.entries.indexOf(e)));return n.data.filter(((e,n)=>!i.includes(n)))})(a,i,r);await e((0,M.Of)(n,$,{columns:i.columns,data:[...l,...s]})),e({type:(0,H.ec)(M.So),payload:(0,_.G4)($,{columns:i.columns,data:[...l,...s]}),meta:{runUuid:n,artifactPath:$}})}catch(i){throw c.A.logErrorAndNotifyUser(i.message||i),i}finally{t(!1)}}),[e]),isSaving:n}};var O=t(34794);const P=O.J1`
  query SearchRuns($data: MlflowSearchRunsInput!) {
    mlflowSearchRuns(input: $data) {
      apiError {
        helpUrl
        code
        message
      }
      runs {
        info {
          runName
          status
          runUuid
          experimentId
          artifactUri
          endTime
          lifecycleStage
          startTime
          userId
        }
        experiment {
          experimentId
          name
          tags {
            key
            value
          }
          artifactLocation
          lifecycleStage
          lastUpdateTime
        }
        data {
          metrics {
            key
            value
            step
            timestamp
          }
          params {
            key
            value
          }
          tags {
            key
            value
          }
        }
        inputs {
          datasetInputs {
            dataset {
              digest
              name
              profile
              schema
              source
              sourceType
            }
            tags {
              key
              value
            }
          }
          modelInputs {
            modelId
          }
        }
        outputs {
          modelOutputs {
            modelId
            step
          }
        }
        modelVersions {
          version
          name
          creationTimestamp
          status
          source
        }
      }
    }
  }
`,j=({filter:e,experimentIds:n,disabled:t=!1})=>{var a,r,i;const{data:s,loading:l,error:d,refetch:u}=(0,O.IT)(P,{variables:{data:{filter:e,experimentIds:n}},skip:t});return{loading:l,data:(0,o.first)(null!==(a=null===s||void 0===s||null===(r=s.mlflowSearchRuns)||void 0===r?void 0:r.runs)&&void 0!==a?a:[]),refetchRun:u,apolloError:d,apiError:null===s||void 0===s||null===(i=s.mlflowSearchRuns)||void 0===i?void 0:i.apiError}};var B={name:"r3950p",styles:"flex:1;display:flex;justify-content:center;align-items:center"};const z=({experimentId:e,runUuid:n,runTags:t,runDisplayName:o,data:s})=>{const{theme:l}=(0,i.u)(),d=R(t),c=0===(null===s||void 0===s?void 0:s.length),[m,p]=u(),g=(0,N.N9)(),v=L(),{data:h,displayName:T,loading:x}=V(e,m,d);if(x)return(0,y.Y)(r.LegacySkeleton,{});const I=e=>e.filter((e=>e.type===f.$6.ASSESSMENT||e.type===f.$6.INPUT||e.type===f.$6.TRACE_INFO&&[f.tj,f.$W,f.Pn].includes(e.id)));return c?(0,y.Y)("div",{css:B,children:(0,y.Y)(r.Empty,{title:(0,y.Y)(A.A,{id:"NqqMPs",defaultMessage:"No evaluation tables logged"}),description:null})}):(0,y.FD)("div",{css:(0,a.AH)({marginTop:l.spacing.sm,width:"100%",overflowY:"hidden"},""),children:[(0,y.Y)("div",{css:(0,a.AH)({width:"100%",padding:`${l.spacing.xs}px 0`},""),children:(0,y.Y)(Y,{experimentId:e,currentRunUuid:n,compareToRunUuid:m,setCompareToRunUuid:p})}),(()=>{const t={experimentId:e,currentRunDisplayName:o,currentEvaluationResults:s||[],compareToEvaluationResults:h,runUuid:n,compareToRunUuid:m,compareToRunDisplayName:T,compareToRunLoading:x,saveAssessmentsQuery:v,getTrace:U.R,initialSelectedColumns:I};return(0,y.Y)(f.tU,{makeHtml:g,children:(0,y.Y)(f.js,{...t})})})()]})},V=(e,n,t)=>{const{data:a,isLoading:r}=(0,f.Ie)({runUuid:n||"",artifacts:t},{disabled:(0,o.isNil)(n)}),{data:i,loading:s}=j({experimentIds:[e],filter:`attributes.runId = "${n}"`,disabled:(0,o.isNil)(n)});return{data:a,displayName:c.A.getRunDisplayName(null===i||void 0===i?void 0:i.info,n),loading:r||s}};var W=t(39595),q=t(82636),Q=t(19114);var K={name:"1nxh63r",styles:"overflow-y:hidden;height:100%;display:flex;flex-direction:column"};const X=({experimentId:e,runUuid:n,runTags:t,runDisplayName:o,setCurrentRunUuid:r})=>{const{theme:l}=(0,i.u)(),d=(0,N.N9)(),[c,m]=u(),{assessmentInfos:g,allColumns:v,totalCount:h,evaluatedTraces:T,otherEvaluatedTraces:x,isLoading:I,error:C,tableFilterOptions:b}=(0,f.KW)({experimentId:e,runUuid:n,otherRunUuid:c}),[S,R]=(0,s.useState)(""),[A,k]=(0,f.R7)(),M=(0,p.LE)(),_=(0,W.jE)(),F=(0,s.useCallback)((e=>{const{responseHasContent:n,inputHasContent:t,tokensHasContent:a}=(0,q.l)(T.concat(x));return e.filter((e=>e.type===f.$6.ASSESSMENT||e.type===f.$6.EXPECTATION||t&&e.type===f.$6.INPUT||n&&e.type===f.$6.TRACE_INFO&&e.id===f.Rl||a&&e.type===f.$6.TRACE_INFO&&e.id===f.YO||e.type===f.$6.TRACE_INFO&&[f.XQ,f.tj,f.$W].includes(e.id)))}),[T,x]),{selectedColumns:H,toggleColumns:$,setSelectedColumns:L}=(0,f.K0)(e,v,F,n),[O,P]=(0,f.GY)(H),{data:j,isLoading:B,error:z,refetchMlflowTraces:V}=(0,f.Zn)({experimentId:e,currentRunDisplayName:o,searchQuery:S,filters:A,runUuid:n,tableSort:O}),X=(0,E.C)(),{data:G,displayName:ee,loading:ne}=Z(e,c),te=(0,s.useMemo)((()=>({currentCount:null===j||void 0===j?void 0:j.length,logCountLoading:B,totalCount:h,maxAllowedCount:(0,w.pR)()})),[j,B,h]),{showEditTagsModalForTrace:ae,EditTagsModal:oe}=(0,D.$)({onSuccess:()=>(0,f.BL)({queryClient:_}),existingTagKeys:(0,f.d9)(j||[]),useV3Apis:!0}),{showExportTracesToDatasetsModal:re,setShowExportTracesToDatasetsModal:ie,renderExportTracesToDatasetsModal:se}=(0,Q.c)({experimentId:e}),le=(0,s.useMemo)((()=>({deleteTracesAction:{deleteTraces:(e,n)=>X.mutateAsync({experimentId:e,traceRequestIds:n})},exportToEvals:{showExportTracesToDatasetsModal:re,setShowExportTracesToDatasetsModal:ie,renderExportTracesToDatasetsModal:se},editTags:{showEditTagsModalForTrace:ae,EditTagsModal:oe}})),[re,ie,se,ae,oe,X]),de=B||ne;return I?(0,y.Y)(J,{}):C?(0,y.Y)("div",{children:(0,y.Y)("pre",{children:String(C)})}):(0,y.FD)("div",{css:(0,a.AH)({marginTop:l.spacing.sm,width:"100%",overflowY:"hidden"},""),children:[(0,y.Y)("div",{css:(0,a.AH)({width:"100%",padding:`${l.spacing.xs}px 0`},""),children:(0,y.Y)(Y,{experimentId:e,currentRunUuid:n,compareToRunUuid:c,setCompareToRunUuid:m,setCurrentRunUuid:r})}),(0,y.Y)(f.sG,{children:(0,y.FD)("div",{css:K,children:[(0,y.Y)(f.w_,{experimentId:e,searchQuery:S,setSearchQuery:R,filters:A,setFilters:k,assessmentInfos:g,countInfo:te,traceActions:le,tableSort:O,setTableSort:P,allColumns:v,selectedColumns:H,setSelectedColumns:L,toggleColumns:$,traceInfos:j,tableFilterOptions:b}),de?(0,y.Y)(J,{}):z?(0,y.Y)("div",{children:(0,y.Y)("pre",{children:String(z)})}):(0,y.Y)(f.tU,{makeHtml:d,children:(0,y.Y)(f._p,{experimentId:e,currentRunDisplayName:o,compareToRunDisplayName:ee,compareToRunUuid:c,getTrace:U.U,getRunColor:M,assessmentInfos:g,setFilters:k,filters:A,selectedColumns:H,allColumns:v,tableSort:O,currentTraceInfoV3:j||[],compareToTraceInfoV3:G,onTraceTagsEdit:ae})}),oe]})})]})},G=({experimentId:e,runUuid:n,runTags:t,runDisplayName:a,setCurrentRunUuid:r})=>{const i=R(t),s=Boolean(n),{data:l,isLoading:d}=(0,f.Ie)({runUuid:n||"",artifacts:i||void 0},{disabled:!s});return d?(0,y.Y)(J,{}):!(0,o.isNil)(l)&&l.length>0?(0,y.Y)(z,{experimentId:e,runUuid:n,runDisplayName:a,data:l,runTags:t}):(0,y.Y)(X,{experimentId:e,runUuid:n,runDisplayName:a,setCurrentRunUuid:r})},J=()=>{const{theme:e}=(0,i.u)();return(0,y.Y)("div",{css:(0,a.AH)({display:"block",marginTop:e.spacing.md,height:"100%",width:"100%"},""),children:[...Array(10).keys()].map((e=>(0,y.Y)(r.ParagraphSkeleton,{label:"Loading...",seed:`s-${e}`},e)))})},Z=(e,n)=>{const{data:t,isLoading:a}=(0,f.Zn)({experimentId:e,currentRunDisplayName:void 0,runUuid:n,disabled:(0,o.isNil)(n)}),{data:r,loading:i}=j({experimentIds:[e],filter:`attributes.runId = "${n}"`,disabled:(0,o.isNil)(n)});return{data:t,displayName:c.A.getRunDisplayName(null===r||void 0===r?void 0:r.info,n),loading:a||i}}}}]);