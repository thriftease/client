<script setup lang="ts">
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput } from '@ionic/vue';
</script>

<template>
    <ion-card>
        <ion-card-header>
            <ion-card-title>{{ $t("thriftEase") }}</ion-card-title>
            <ion-card-subtitle>{{ $t("signIn") }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
            <ion-input :label="$t('email')" label-placement="floating" fill="outline" :clear-input="true">
            </ion-input>
            <br>
            <ion-input type="password" :label="$t('password')" label-placement="floating" fill="outline"
                :clear-input="true">
            </ion-input>
            <br>
            <ion-button color="medium" fill="solid">{{ $t("submit") }}</ion-button>
        </ion-card-content>
    </ion-card>
</template>