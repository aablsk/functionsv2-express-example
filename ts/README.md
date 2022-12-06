Deploy with 
```
gcloud functions deploy $FN_NAME \ 
    --gen2 \
    --project=$PROJECT_ID \
    --region=$REGION \
    --runtime=nodejs16 \
    --source=. \
    --entry-point=expressApi \
    --trigger-http \
    --allow-unauthenticated \
    --ingress-settings=internal-and-gclb \
    --run-service-account=$SERVICE_ACCOUNT \
    --serve-all-traffic-latest-revision
```
